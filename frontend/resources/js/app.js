import Vue from 'vue';

// import HomePage from './vueapp/HomePage.vue'
// import IntroPage from './vueapp/IntroPage.vue'
// import StorePage from './vueapp/StorePage.vue'

import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from "./router/index";
import VueCompositionAPI from '@vue/composition-api'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueCompositionAPI)
// Vue.use(VueSession)

export const eventBus = new Vue();

const app = new Vue({
    el: '#app',
    router,
    components: { App }
})
