import axios from 'axios';

// API endpoint
const url = 'http://localhost/api/messages';

const state = {
  messages: [],
};

const getters = {
  allMessages: (state) => state.messages,
};

const mutations = {
  setMessages: (state, data) => {
    state.messages = data;
  },
};

const actions = {
  async fetchMessages({ commit }, token) {
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((results) => {
        commit('setMessages', results.data);
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
