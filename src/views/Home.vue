<template>
  <div class="home">
    <!-- Admin login form -->
    <div class="login">
      <form id="form" action="javascript:void(0);">
        <label for="username">Username:</label>
        <input type="text" name="username" id="username" v-model="username" />
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" v-model="pass" />
        <button id="button" v-on:click="login(username, pass)">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';

// Load dialog from electron
const dialog = require('electron').remote.dialog;

export default {
  name: 'Home',
  data() {
    return {
      username: '',
      pass: '',
    };
  },
  computed: mapGetters(['loginUrl', 'token']),
  methods: {
    ...mapActions(['fetchToken']),
    login: function(username, pass) {
      axios
        .post(this.loginUrl, {
          username,
          pass,
        })
        .then((result) => {
          this.fetchToken(result.data.token);
          this.$router.push('/messages');
        })
        .catch(() => {
          this.username = '';
          this.pass = '';
          console.clear();
          dialog.showErrorBox('Denied', 'Wrong Credentials!');
        });
    },
  },
};
</script>

<style>
.login {
  display: grid;
  height: 600px;
  justify-content: space-around;
  align-content: space-evenly;
}
#form {
  height: 300px;
  width: 300px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-around;
  font-size: 17px;
  background: rgba(255, 255, 255, 0.5);
  padding: 25px 10px 0 10px;
  border-radius: 25px 0 25px 0;
  -webkit-app-region: no-drag;
}

#form > label {
  height: 30px;
  width: 50px;
  line-height: 30px;
}
#form > input {
  height: 30px;
  width: 150px;
  font-size: 18px;
  border: none;
  background-color: #878e76;
  color: wheat;
}
#form > input:focus {
  outline: none;
  background-color: wheat;
  color: #878e76;
}

#button {
  height: 50px;
  grid-column-start: 1;
  grid-column-end: 3;
  font-size: 20px;
  border: none;
  background-color: cornflowerblue;
  box-shadow: 5px 10px #878e76;
}
#button:hover {
  color: white;
  background-color: #878e76;
  box-shadow: 5px 10px cornflowerblue;
}
#button:focus {
  outline: none;
}
</style>
