import { createApp } from 'vue'
import App from './App.vue'
import SvgIcon from "vue3-icon";
import './styles/main.scss'

import router from './router'

createApp(App).use(router).component("svg-icon", SvgIcon).mount('#app')
