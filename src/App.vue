<template>
  <div id="app">
    <div>
      <background></background>
      <div>
        <nav-bar v-if="auth==''"></nav-bar>
        <navbarposlogin v-if="auth=='loggedin'"></navbarposlogin>
        <br>
        <apresentacao v-if="auth==''"></apresentacao>
        <br>
      </div>
      <div id="wrapper">
        <span>
          <b-row>
            <b-col>
              <imagem-cantina v-if="auth==''"></imagem-cantina>
            </b-col>
            <b-col>
              <registo v-if=" auth==''"></registo>
            </b-col>
          </b-row>
          <br>
          <br>
          <br>
          <b-row>
            <equipa v-if="auth==''"></equipa>
          </b-row>
          <filadacantina v-if="auth=='loggedin'"></filadacantina>
          <charts v-if="auth=='loggedin'"></charts>
        </span>
      </div>
    </div>
    <rodape></rodape>
  </div>
</template>

<script>
import EventBus from "./EventBus";

EventBus.$on("logged-in", test => {
  console.log(test);
});

export default {
  data() {
    return {
      posts: [],
      auth: ""
    };
  },

  logout() {
    localStorage.removeItem("usertoken");
  },
 
  mounted() {
    EventBus.$on("logged-in", status => { //esconder e aparecer components
      this.auth = status;
    });
  }
};
</script>

<style scoped lang='scss'>
.form-input {
  border: 20px solid black;
  border-radius: 20px;
}
</style>
