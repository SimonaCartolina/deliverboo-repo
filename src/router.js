import { createRouter, createWebHistory } from "vue-router";


import restaurantsList from './components/pages/restaurantsList.vue';
import SingleRestaurant from './components/pages/SingleRestaurant.vue';



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
        }
    ]
})

export { router };