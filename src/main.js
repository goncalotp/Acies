import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import { Modal } from 'bootstrap-vue/es/components'
import 'vue-loaders/dist/vue-loaders.css';
import * as VueLoaders from 'vue-loaders';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";



import bNavbar from "bootstrap-vue/es/components/navbar/navbar";
import bNavbarBrand from "bootstrap-vue/es/components/navbar/navbar-brand";
import bNavbarNav from "bootstrap-vue/es/components/navbar/navbar-nav";
import bNavbarToggle from "bootstrap-vue/es/components/navbar/navbar-toggle";

import bNavItem from "bootstrap-vue/es/components/nav/nav-item";
import bCollapse from "bootstrap-vue/es/components/collapse/collapse";

Vue.component("b-navbar", bNavbar);
Vue.component("b-navbar-brand", bNavbarBrand);
Vue.component("b-navbar-nav", bNavbarNav);
Vue.component("b-navbar-toggle", bNavbarToggle);

Vue.component("b-collapse", bCollapse);
Vue.component("b-nav-item", bNavItem);

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(Router);
Vue.use(Modal)
Vue.use(VueLoaders);

import Navbar from './Navbar.vue';
import Apresentacao from './Apresentacao.vue';
import Imagemcantina from './Imagemcantina.vue';
import Registo from './Registo.vue';
import Rodape from './Rodape.vue';
import NavBarPosLogin from './NavBarPosLogin';
import Background from './Background';
import Filadacantina from './Filadacantina';
import Equipa from './Equipa.vue'; 



Vue.component('nav-bar', Navbar);
Vue.component('apresentacao', Apresentacao);
Vue.component('imagem-cantina', Imagemcantina);
Vue.component('registo', Registo);
Vue.component('rodape', Rodape);
Vue.component('navbarposlogin', NavBarPosLogin);
Vue.component('background', Background);
Vue.component('filadacantina', Filadacantina);
Vue.component('equipa', Equipa);


new Vue({
  el: '#app',
  render: h => h(App)

})

export default new Router({
  routes: [
    {
      path: "/",
      name: 'App',
      component: App,  
      
      }
    
    
  ]
})



