<template >
  <div>
    <b-navbar toggleable="md" type="light">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">
        <img src="./assets/acieslogo.png" class="logoImage">
        <strong>ACIES</strong>
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-form v-if="auth==''" class="form-signin">
          <b-form-input size="sm" v-model="email" class="email" type="text" placeholder="email"/>
          <b-form-input
            size="sm"
            v-model="password"
            class="password"
            type="password"
            placeholder="password"
          />
          <b-button size="sm" @click="login()" class="loginBtn" type="submit">Login</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>


<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

import EventBus from "./EventBus";

EventBus.$on("logged-in", test => {
  console.log(test);
});

export default {
  data() {
    return {
      auth: "",
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      axios
        .post("https://cantina-ronaldoviolas.c9users.io/login", {
          //pela rota ir verificar o email e a password
          email: this.email,
          password: this.password
        })

        .then(res => {
          localStorage.setItem("usertoken", res.data);
          this.email = "";
          this.password = "";
          alert("Bom dia");
          this.emitMethod();
        })
        .catch(err => {
          alert("Email ou password errado");
          console.log(err);
        });
    },
    emitMethod() {
      EventBus.$emit("logged-in", "loggedin");
    },
    logout() {
      localStorage.removeItem("usertoken");
    }
  },
  mounted() {
    EventBus.$on("logged-in", status => {
      this.auth = status;
    });
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

.loginBtn {
  background-color: white;
  border: black;
  color: black;
}

.loginBtn:hover {
  background-color: rgb(212, 113, 74);
}
</style> 