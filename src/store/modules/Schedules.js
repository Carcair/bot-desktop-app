import axios from 'axios';

// API endpoint
// const url = 'http://localhost/api/schedules';
const url = 'https://praksans.dyndns.org:450/api/schedules/';

const state = {
  schedules: [],
};

const getters = {
  allSchedules: (state) => state.schedules,
};

const mutations = {
  setSchedules: (state, data) => {
    state.schedules = data;
  },
};

const actions = {
  async fetchSchedules({ commit }, token) {
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((results) => {
        commit('setSchedules', results.data);
      })
      .catch((err) => console.log(err));
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
