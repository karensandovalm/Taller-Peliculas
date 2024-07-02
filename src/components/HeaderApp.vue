<template>
    <ion-header>
        <ion-toolbar>
        <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ title }}</ion-title>
        </ion-toolbar>
    </ion-header>
</template>

<script  lang="ts">
    import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/vue';

    export default {
        name: "HeaderApp",
        components: {
            IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle
        },
        props: {
            title: String
        }
    }
</script>