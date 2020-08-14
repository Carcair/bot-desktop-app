<template>
  <div class="triggers">
    <Navbar></Navbar>

    <div class="mainT">
      <table>
        <tr class="tHeader">
          <th class="message">Message</th>
          <th class="trigger">Trigger Word</th>
          <th class="channel">Channel</th>
          <th class="active">Active</th>
        </tr>
        <tr class="tRow" v-for="(trigger, index) in allTriggers" :key="index">
          <td>{{ trigger.message }}</td>
          <td>{{ trigger.trigger_word }}</td>
          <td>{{ trigger.channel }}</td>
          <td>{{ trigger.active }}</td>
        </tr>
      </table>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Triggers',
  components: {
    Navbar,
    Footer,
  },
  computed: mapGetters(['allTriggers', 'token']),
  methods: {
    ...mapActions(['fetchTriggers']),
  },
  created() {
    this.fetchTriggers(this.token);
  },
};
</script>

<style>
.triggers {
  display: grid;
  grid-template-columns: 150px 648px;
  grid-template-rows: 600px;
}

.mainT {
  display: grid;
  grid-template-rows: 548px 50px;
}

.message {
  width: 150px;
}

.trigger {
  width: 200px;
}

.channel {
  width: 150px;
}

.active {
  width: 150px;
}

.tHeader {
  height: 50px;
  font-size: 18px;
  background-color: rgba(241, 246, 247, 0.7);
}

.tRow {
  height: 60px;
}

.tRow:nth-child(even) {
  background: rgba(204, 207, 207, 0.5);
}
.tRow:nth-child(odd) {
  background: rgba(235, 236, 236, 0.5);
}
</style>
