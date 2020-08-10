<template>
  <div class="messages">
    <Navbar></Navbar>

    <div class="mainM">
      <table>
        <tr class="tHeader">
          <th class="title">Title</th>
          <th class="text">Text</th>
          <th class="created">Created</th>
        </tr>
        <tr class="tRow" v-for="message in allMessages" :key="message.id">
          <td>{{ message.title }}</td>
          <td>{{ message.text }}</td>
          <td>{{ message.cr_date }}</td>
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
  name: 'Messages',
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {};
  },
  computed: mapGetters(['allMessages', 'token']),
  methods: {
    ...mapActions(['fetchMessages']),
  },
  created() {
    this.fetchMessages(this.token);
  },
};
</script>

<style>
.messages {
  display: grid;
  grid-template-columns: 150px 648px;
  grid-template-rows: 600px;
}

.mainM {
  display: grid;
  grid-template-rows: 548px 50px;
}

.title {
  width: 100px;
}

.text {
  width: 450px;
}

.created {
  width: 100px;
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
