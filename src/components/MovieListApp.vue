<template>
    <header-app :title="pageTitle"/>
    <ion-content v-if="movies.length > 0">
        <ion-row class="d-flex justify-content-between pager">
            <ion-col size="4" class="d-flex justify-content-start">
                <ion-button @click="changePage('previous')" size="small">
                <ion-icon slot="start" :icon="chevronBackOutline"></ion-icon>
                Anterior
                </ion-button>
            </ion-col>
            <ion-col size="2" class="d-flex justify-content-center">
                <p class="text-center">{{ selectedPage }}/10</p>
            </ion-col>
            <ion-col size="4" class="d-flex justify-content-center">
                <ion-button @click="changePage('next')" size="small">
                Siguiente
                <ion-icon slot="end" :icon="chevronForwardOutline"></ion-icon>
                </ion-button>
            </ion-col>
        </ion-row>
        <ion-row class="movie-list-container">
            <ion-col v-for="movie in movies" :key="movie.id" size="6">
                <card-movie-app :movie="movie"/>
            </ion-col>
        </ion-row>
    </ion-content>
    <ion-content v-else>
        <ion-row
            class="d-flex justify-content-center aling-items-center spinner-container"
            >
            <ion-col class="d-flex justify-content-center aling-items-center">
                <ion-spinner name="dots" class="spinner-custom"></ion-spinner>
            </ion-col>
        </ion-row>
    </ion-content>
</template>

<script>
import HeaderApp from '@/components/HeaderApp.vue'
import MovieServices from '@/services/MovieServices'
import { useRoute } from 'vue-router'
import { IonContent, IonRow, IonCol, IonTitle, IonIcon, IonButton, IonSpinner } from '@ionic/vue'
import { chevronBackOutline, chevronForwardOutline, star } from 'ionicons/icons';
import CardMovieApp from '@/components/CardMovieApp.vue'
export default {
    name: 'MovieListApp',
    components: {
        HeaderApp,
        CardMovieApp,
        IonContent,
        IonRow,
        IonCol,
        IonTitle,
        IonIcon,
        IonButton,
        IonSpinner,
        star
    },
    data () {
        return  {
            type: '',
            filter: '',
            genres: [],
            movies: [],
            title: '',
            selectedPage : '1'
        }
    },
    async created() {
        const route = useRoute()
        this.type = route.params.type
        this.filter = route.params.filter
        this.genres = await MovieServices.getGenrers()
        await this.getMovies()
    },
    methods: {
        async getGenres() {
            this.genres = await MovieServices.getGenres()
        },
        async getMovies() {
            if(this.type == 'genre'){
                this.movies = await MovieServices.getMoviesFilteredByGenre(this.filter, this.selectedPage)
            }
            if(this.type == 'category') {
                this.movies = await MovieServices.getMoviesFilteredByCategory(this.filter, this.selectedPage)
            }
        },
        async changePage(goto) {
            if(goto == 'next' && this.selectedPage < 10){
                this.selectedPage = parseFloat(this.selectedPage) + 1
            }

            if(goto == 'previous' && this.selectedPage > 1){
                this.selectedPage = parseFloat(this.selectedPage) - 1
            }
            await this.getMovies(this.type, this.selectedPage)
        }
    },
    computed: {
        pageTitle() {
            if(this.type == "genre") {
                
                const genre_selected =  this.genres.find(element => {
                    return element.id == this.filter
                })
                if(genre_selected) {
                    return genre_selected.name
                }
            }
            if(this.type == "category"){
                switch (this.filter) {
                    case "now_playing":
                        return "Cartelera"
                        break
                    case "top_rated":
                        return "Mejor Calificadas"
                        break
                    case "popular":
                        return "Populares"
                        break
                    case "upcoming":
                        return "Próximos estrenos"
                        break
                    default:
                        return "PELÍCULAS"
                        break
                }
            }
            
        },
        star() {
            return star
        },
        chevronBackOutline() {
            return chevronBackOutline
        },
        chevronForwardOutline() {
            return chevronForwardOutline
        }
    }
}
</script>

<style>

</style>