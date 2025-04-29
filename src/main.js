import { createApp } from 'vue'
import App from './App.vue'
import Toast from 'vue-toast-notification'
import router from "./router"
import 'vue-toast-notification/dist/theme-sugar.css';

import "@/assets/sass/base.scss"


createApp(App)
        .use(router)
        .use(Toast, { position: "top-right" })
        .mount('#app')
