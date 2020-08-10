<template>
  <div class="schedules">
    <Navbar></Navbar>

    <div class="mainS">
      <table>
        <tr class="tHeader">
          <th class="message">Message</th>
          <th class="date">Next Due Date</th>
          <th class="active">Active</th>
          <th class="repeat">Repeat after (days)</th>
        </tr>
        <tr class="tRow" v-for="(schedule, index) in allSchedules" :key="index">
          <td>{{ schedule.message }}</td>
          <td>{{ schedule.run_date }}</td>
          <td>{{ schedule.active }}</td>
          <td>{{ schedule.repeat_range }}</td>
        </tr>
      </table>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Schedules',
  components: {
    Navbar,
    Footer,
  },
  computed: mapGetters(['allSchedules', 'token']),
  methods: {
    ...mapActions(['fetchSchedules']),
  },
  created() {
    this.fetchSchedules(this.token);
  },
};
</script>

<style>
.schedules {
  display: grid;
  grid-template-columns: 150px 648px;
  grid-template-rows: 600px;
}

.mainS {
  display: grid;
  grid-template-rows: 548px 50px;
}

.message {
  width: 150px;
}

.date {
  width: 200px;
}

.active {
  width: 150px;
}

.repeat {
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
