<template>
    <ion-list>
        <ion-item href="/">
            <ion-label>Inicio</ion-label>
        </ion-item>
        <ion-item v-for="genre in genres" :key="genre.id" :href="`/movies/genre/${genre.id}`">
            <ion-label>{{ genre.name }}</ion-label>
        </ion-item>
    </ion-list>
</template>

<script>
import { IonList, IonItem, IonIcon, IonLabel } from '@ionic/vue';
import MovieServices from "@/services/MovieServices"
export default {
    name : 'MenuItemApp',
    components: {
        IonItem,
        IonList,
        IonIcon,
        IonLabel
    },
    data() {
        return {
            genres: [{}]
        }
    },
    async created() {
        this.genres = await MovieServices.getGenrers()
    }
}
</script>

<style>

</style>