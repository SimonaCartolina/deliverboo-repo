import { createApp } from 'vue'
import { router } from './router';
import './assets/styles/style.scss'
import App from './App.vue'

createApp(App).use(router).mount('#app')

