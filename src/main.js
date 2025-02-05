import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Vue from "vue";
import Vuex from "vuex";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
Vue.use(Vuex);
