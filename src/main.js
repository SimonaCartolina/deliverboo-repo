import { createApp } from 'vue'

import "bootstrap/dist/css/bootstrap.min.css"

import App from './App.vue'
import 'font-awesome/scss/font-awesome.scss'
import { router } from './router';

createApp(App).use(router).mount('#app')