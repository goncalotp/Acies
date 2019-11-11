<template>
  <div class="filadacantina">
    <img class="filadeespera" src="./assets/filadespera.jpg">
    <h2>Pessoas na fila</h2>
    <p id="nPessoas" class="nPessoas">{{post}}</p>
    <h3>Tempo estimado de espera</h3>
    <p id="tEspera" class="tEspera">{{tempo}} minutos</p>
    <br>
    <p>Clicar no botão aviso para receber um email com o alerta que apenas tem 15 pessoas na fila.</p>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  data() {
    return {
      post: null,
      renderComponent: true,
      error: null
    };
  },

  watch: {
    // call again the method if the route changes
    $route: "fetchData"
  },

  // Fetches posts when the component is created.
  created() {
    var self = this;
    setInterval(function() {
      //update da base de dados a cada 5 segundos

      axios
        .get(`https://cantina-ronaldoviolas.c9users.io/update`) // ligação ao backend no c9
  
        .then(response => {
          // JSON responses are automatically parsed.
          if (response.data > 0) {
            //entrada de todos os valores sobre a fila da cantina que se encontram na base de dados mongodb.
            //numero de pessoas que estão na fila
            self.post = response.data;
            //tempo estimado
            let tempo = 0;
            tempo = response.data * 0.6;
            self.tempo = Math.round(tempo);
          }
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }, 5000);
  }
};
</script>

<style>
.filadacantina {
  text-align: center;
  padding: 2cm;
}

.filadeespera {
  width: 600px;
}

.nPessoas {
  border: none;
  font-size: 25px;
}

.tEspera {
  border: none;
  font-size: 20px;
}

.tReload {
  text-align: left;
}
</style>
