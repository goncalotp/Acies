<template>
  <div>
    <div class="registo">
      <h5 class="registoTxt">Registo</h5>
      <br>
      <b-form-input size="sm" v-model="username" type="text" placeholder="nome"/>
      <b-form-input size="sm" v-model="email" type="text" placeholder="email"/>
      <b-form-input
        size="sm"
        class="mr-sm-2"
        v-model="password"
        type="password"
        placeholder="password"
      />
      <b-button size="sm" @click="registar()" class="registoBtn" type="submit">Registar</b-button>
    </div>
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
      username: "",
      apelido: "",
      email: "",
      nestudante: "",
      password: "",
      reppassword: ""
    };
  },
  methods: {
    registar() {
      axios
        .post("https://cantina-ronaldoviolas.c9users.io/register", {
          email: this.email,
          password: this.password,
          username: this.username,
          apelido: this.apelido,
          nestudante: this.nestudante,
          reppassword: this.reppassword
        })
        .then(res => {
          localStorage.setItem("usertoken", res.data);
          this.email = "";
          this.password = "";
          this.nome = "";
          this.apelido = "";
          this.nestudante = "";
          this.reppassword = "";
          alert("Registo feito com sucesso");
        })
        .catch(err => {
          alert("Email já existente")
          console.log(err);
        });
    }
  }
};
</script>


<style>
.registoTxt {
  text-align: center;
}

.registo {
  width: 30em;
  padding: 70px 40px;
  float: right;
  transform: translate(-150px, 10px);
  border: solid 1px;
}

.registoBtn {
  transform: translate(300px, 10px);
  background-color: white;
  border: black;
  color: black;
}

.registoBtn:hover {
  background-color: rgb(212, 113, 74);
}
</style> 