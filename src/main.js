import { createApp } from 'vue'
import App from './App.vue'
import Router from "./router";
import Axios from "axios";



createApp(App).use(Router).use(Axios).mount('#app')
