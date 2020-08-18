<template>
  <div class="addM">
    <div class="esc" v-on:click="setDialog">x</div>
    <form class="sendM">
      <label for="title">Title:</label>
      <input type="text" name="title" id="title" />
      <div>x</div>
      <label for="text">Message content:</label>
      <textarea name="text" id="text" cols="30" rows="10"></textarea>
      <div>x</div>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'AddMessage',
  methods: {
    ...mapMutations(['setDialog']),
  },
};
</script>

<style>
.esc {
  position: absolute;
  top: 0;
  right: 0;
  height: 15px;
  width: 15px;
  line-height: 15px;
  text-align: center;
}
.esc:hover {
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.addM {
  width: 400px;
  height: 350px;
  background-color: rgba(81, 81, 110, 0.788);
  position: absolute;
  top: 125px;
  left: 200px;
  padding: 25px;
  border-radius: 25px 0 25px 0;
  -webkit-app-region: no-drag;
}

.sendM {
  display: grid;
  grid-template-columns: 70px 280px 20px;
  gap: 15px 5px;
}

.sendM > button {
  grid-column: 1/3;
  width: 200px;
  height: 50px;
  margin-left: 100px;
  font-size: 20px;
  border: none;
  background-color: rgba(241, 246, 247, 0.7);
  box-shadow: 5px 10px #878e76;
}
.sendM > button:hover {
  color: white;
  background-color: #878e76;
  box-shadow: 5px 10px rgba(241, 246, 247, 0.7);
  cursor: pointer;
}

#text {
  resize: none;
}

#title,
#text {
  background-color: rgba(0, 0, 0, 0.4);
  color: wheat;
  outline: none;
  border: none;
}
#title:focus,
#text:focus {
  background-color: wheat;
  color: rgba(0, 0, 0, 0.4);
}
</style>
