import { createRouter, createWebHistory } from "vue-router";


import restaurantsList from './components/pages/restaurantsList.vue';
import SingleRestaurant from './components/pages/SingleRestaurant.vue';
import AppPagamenti from './components/pages/AppPagamenti.vue';
import HeaderApp from './components/partials/HeaderApp.vue';
import AboutUs from './components/pages/AboutUs.vue';
import HeadApp from './components/pages/HeadApp.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'restaurantsList',
            component: restaurantsList,
        },
        {
            path: '/',
            name: 'HeadApp',
            component: HeadApp,
        },
        {
            path: '/SingleRestaurant/:id',
            name: 'SingleRestaurant',
            component: SingleRestaurant,
        },
        {
            path: '/AppPagamenti',
            name: 'AppPagamenti',
            component: AppPagamenti,
        },
        {
            path: '/HeaderApp',
            name: 'HeaderApp',
            component: HeaderApp,
        },
        {
            path: '/AboutUs',
            name: 'AboutUs',
            component: AboutUs,
        },
    ]
})

export { router };