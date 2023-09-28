import { createRouter, createWebHistory } from "vue-router";


import restaurantsList from './components/pages/restaurantsList.vue';
import SingleRestaurant from './components/pages/SingleRestaurant.vue';
import CarrelloApp from './components/pages/CarrelloApp.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'restaurantsList',
            component: restaurantsList,
        },
        {
            path: '/SingleRestaurant/:id',
            name: 'SingleRestaurant',
            component: SingleRestaurant,
        },
        {
            path: '/CarrelloApp',
            name: 'CarrelloApp',
            component: CarrelloApp,
        },
    ]
})

export { router };