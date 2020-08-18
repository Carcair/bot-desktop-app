import axios from 'axios';

// const url = 'http://localhost/api/reports';
const url = 'https://praksans.dyndns.org:450/api/reports/';

const state = {
  labels: [],
  values: [[]],
};

const getters = {
  getLabels: (state) => state.labels,
  getValues: (state) => state.values,
};

const mutations = {
  setUsage: (state, data) => {
    let tempLabels = [];
    let tempValues = [[]];

    data.usage.forEach((element) => {
      tempLabels.push(element.date);
      tempValues[0].push(element.called);
    });

    state.labels = tempLabels;
    state.values = tempValues;
  },
};

const actions = {
  async fetchUsage({ commit }, token) {
    axios
      .get(`${url}/usage`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((results) => {
        commit('setUsage', results.data);
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
