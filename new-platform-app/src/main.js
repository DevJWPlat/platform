import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css';  // Make sure this is the correct path to your CSS file


createApp(App).use(router).mount('#app')
