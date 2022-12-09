import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import storeLocation from "./store/location";

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.use(storeLocation, ).mount('#app')
