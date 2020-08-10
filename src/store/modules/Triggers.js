import axios from 'axios';

// API endpoint
const url = 'http://localhost/api/triggers';

const state = {
  triggers: [],
};

const getters = {
  allTriggers: (state) => state.triggers,
};

const mutations = {
  setTriggers: (state, data) => {
    state.triggers = data;
  },
};

const actions = {
  async fetchTriggers({ commit }, token) {
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((results) => {
        commit('setTriggers', results.data);
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
