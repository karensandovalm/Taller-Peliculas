<template>
  <ion-app>
    <menu-app/>
    <ion-page id="main-content">
      <ion-router-outlet />
    </ion-page>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from "@ionic/vue";
import MenuApp from './components/MenuApp.vue';
export default {
  components: {
    IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, MenuApp
  }
}
</script>