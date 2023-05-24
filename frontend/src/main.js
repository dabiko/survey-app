import './styles.css'

import { createApp } from 'vue'
import store from "@/store/indexStore";
import router from "@/router";
import App from './App.vue'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
