<template>
  <div class="footer">
    <div></div>
    <div class="buttonF" v-on:click="setDialog">Add</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'Footer',
  methods: {
    ...mapMutations(['setDialog']),
  },
};
</script>

<style>
.footer {
  display: grid;
  grid-template-columns: 538px 100px;
}

.buttonF {
  width: 100px;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
  text-align: center;
  background-color: rgba(241, 246, 247, 0.7);
  box-shadow: 5px 10px #878e76;
  -webkit-app-region: no-drag;
}
.buttonF:hover {
  color: white;
  background-color: #878e76;
  box-shadow: 5px 10px rgba(241, 246, 247, 0.7);
  cursor: pointer;
}
</style>
