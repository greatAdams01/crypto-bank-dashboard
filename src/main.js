import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import SvgIcon from "vue3-icon";
import './styles/main.scss'

import Toast, { POSITION } from "vue-toastification";

import "vue-toastification/dist/index.css";

import router from './router'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(Toast, { position: POSITION.TOP_RIGHT, timeout: 4000 });
app.component("svg-icon", SvgIcon).mount('#app')