<template>
    <ion-card class="card-category" :href="`/movies/category/${category.id}`">
        <img class="card-category__image" alt="Silhouette of mountains" :src="image" />
        <ion-card-header class="d-flex justify-content-center">
            <ion-card-title class="text-center card-category__title">{{ category.name }}</ion-card-title>
        </ion-card-header>
        <ion-card-content class="card-category__description">
            {{ category.description }}
        </ion-card-content>
    </ion-card>
</template>
<script lang="ts">

import { IonCard, IonCardContent, IonCardTitle, IonCardHeader } from '@ionic/vue';
export default {
    name: "CardCategoryApp",
    components: {
        IonCard,
        IonCardContent,
        IonCardTitle,
        IonCardHeader
    },
    props: {
        category: {
            type: Object,
            default: {}
        }
    },
    computed: {
        image() {
            return new URL(`${this.category.image}`, import.meta.url).href;
        }
    }
}
</script>