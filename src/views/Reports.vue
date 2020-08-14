<template>
  <div class="reports">
    <Navbar></Navbar>
    <div class="mainR">
      <div class="usage">
        <div class="graph">
          <graph-line
            :width="550"
            :height="350"
            :shape="'normal'"
            :axis-min="0"
            :axis-full-mode="true"
            :labels="getLabels"
            :names="names"
            :values="getValues"
          >
            <note :text="'Bot usage'"></note>
            <tooltip :names="names" :position="'right'"></tooltip>
            <legends :names="names"></legends>
            <guideline :tooltip-y="true"></guideline>
          </graph-line>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Reports',
  data() {
    return {
      names: ['BOT used'],
    };
  },
  components: {
    Navbar,
  },
  computed: mapGetters(['token', 'getLabels', 'getValues']),
  methods: {
    ...mapActions(['fetchUsage']),
  },
  created() {
    this.fetchUsage(this.token);
  },
};
</script>

<style>
.reports {
  display: grid;
  grid-template-columns: 150px 648px;
  grid-template-rows: 600px;
}

.mainR {
  display: grid;
}
</style>
