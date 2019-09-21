import Vue from 'vue'
<<<<<<< HEAD
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

Vue.use(BootstrapVue)
Vue.use(VueSidebarMenu)
Vue.component('font-awesome-icon', FontAwesomeIcon)
=======
import App from './App.vue'
>>>>>>> af6c6b0cc7cb5bd4d6e337d6669d7def9418a2e9

Vue.config.productionTip = false

new Vue({
<<<<<<< HEAD
  router,
  store,
=======
>>>>>>> af6c6b0cc7cb5bd4d6e337d6669d7def9418a2e9
  render: h => h(App),
}).$mount('#app')
