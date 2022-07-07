import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import Toaster from 'v-toaster'
import 'v-toaster/dist/v-toaster.css'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Toaster, {timeout: 5000})
Vue.use(jsPDF)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
