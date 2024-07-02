<template>
    <ion-menu content-id="main-content">
        <ion-header>
            <ion-toolbar>
            <ion-title>Menu</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <menu-item-app/>
        </ion-content>
    </ion-menu>
</template>

<script lang="ts">
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel
} from "@ionic/vue";
import MenuItemApp from "./MenuItemApp.vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        IonButtons,
        IonContent,
        IonHeader,
        IonMenu,
        IonMenuButton,
        IonPage,
        IonTitle,
        IonToolbar,
        IonList,
        IonItem,
        IonLabel,
        MenuItemApp
    },
});
</script>
