<template>
  <div>
    <b-navbar toggleable="md" type="light">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">
        <img src="./assets/acieslogo.png" class="logoImage">
        <strong>ACIES</strong>
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="#">
            <b>Bom dia,</b>
          </b-nav-item>
          <p id="nomePessoa" class="nomePessoa">{{nome}}</p>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-button size="sm" class="alertBtn" type="alert" @click="aviso()">Aviso</b-button>
            <b-button size="sm" class="logoutBtn" type="logout" @click="logout()">Logout</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

// import router from '../router';
export default {
  data() {
    return {
      auth: "",
      nome: ""
    };
  },

  watch: {
    // call again the method if the route changes
    $route: "fetchData"
  },
  
    created() { 
      // axios
      //   .get("https://cantina-ronaldoviolas.c9users.io/me" )
          
      //   .then(res => {
      //    localStorage.gettItem("usertoken");
      //   // this.username = localS.email; 
      //   // this.nome = response.username;
          
      //   })
      //    .catch(err => {
      //     console.log(err);
      //   });
      
      this.username=window.localStorage.getItem("usertoken").name;
      
    },
    methods: {
    logout() {
      setTimeout(function() {
        location.reload();
      }, 1000);
    },

    aviso() {
      axios
        .post("https://cantina-ronaldoviolas.c9users.io/Notification", {})
        .then(res => {
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>




<style>
.logoImage {
  width: 50px;
  length: 50px;
}
.navbar {
  background-color: #ffffff;
}

.alertBtn {
  transform: TranslateX(-20px);
  background-color: white;
  border: black;
  color: black;
}

.logoutBtn {
  background-color: white;
  border: black;
  color: black;
}

.alertBtn:hover {
  background-color: rgb(212, 113, 74);
}

.logoutBtn:hover {
  background-color: rgb(212, 113, 74);
}

.nomePessoa {
  border: none;
  background: #fadecb;
  opacity: 0.1;
}
</style> 