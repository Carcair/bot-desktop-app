<template>
  <div class="button" v-on:click="reroute(route)"><slot></slot></div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: 'NavButton',
  props: ['route'],
  computed: mapGetters(['token']),
  methods: {
    ...mapMutations(['resetToken']),
    reroute(route) {
      if (this.route == 'logout') {
        this.resetToken();
        this.$router.push('/');
      } else this.$router.push(`/${route}`);
    },
  },
};
</script>

<style>
.button {
  width: 100px;
  height: 40px;
  margin: auto;
  line-height: 40px;
  font-weight: bold;
  text-align: center;
  background-color: cornflowerblue;
  box-shadow: 5px 10px #878e76;
}
.button:hover {
  color: white;
  background-color: #878e76;
  box-shadow: 5px 10px cornflowerblue;
  cursor: pointer;
}
</style>
