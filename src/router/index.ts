import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import MovieListView from "@/views/MovieListView.vue"
import MovieDetailView from "@/views/MovieDetailView.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/movies/:type/:filter',
    name: 'Movies',
    component: MovieListView
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: MovieDetailView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
