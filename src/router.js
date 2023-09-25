import { createRouter, createWebHistory } from "vue-router";


import restaurantsList from './components/pages/restaurantsList.vue';
import SingleRestaurant from './components/pages/SingleRestaurant.vue';
import ShoppingBag from './components/ShoppingBag.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'restaurantsList',
            component: restaurantsList,
        },
        {
            path: '/SingleRestaurant',
            name: 'SingleRestaurant',
            component: SingleRestaurant,
        },
        {
            path: '/ShoppingBag',
            name: 'ShoppingBag',
            component: ShoppingBag,
        },
    ]
})

export { router };