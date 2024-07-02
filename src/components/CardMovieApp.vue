<template>
    <ion-card class="card-movie" :href="`/detail/${movie.id}`">
        <img v-if="movie.backdrop_path" :src="`${BASE_IMG}${movie.backdrop_path}`" alt="Imagen de película">
        <ion-card-header class="d-flex justify-content-center">
            <ion-card-title class="text-center card-movie__title">{{ movie.title }}</ion-card-title>
        </ion-card-header>
        <ion-card-content class="card-movie__description">
            {{ movie.description }}
        </ion-card-content>
    </ion-card>
</template>
<script lang="ts">

import { IonCard, IonCardContent, IonCardTitle, IonCardHeader } from '@ionic/vue';
import MovieServices from '@/services/MovieServices'
export default {
    name: "CardMovieApp",
    components: {
        IonCard,
        IonCardContent,
        IonCardTitle,
        IonCardHeader
    },
    props: {
        movie: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            BASE_IMG : "https://image.tmdb.org/t/p/w500/",
        }
    }
}
</script>