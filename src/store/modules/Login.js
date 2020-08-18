const state = {
  token: '',
  // url: 'http://localhost/login',
  url: 'https://praksans.dyndns.org:450/login',
};

const getters = {
  token: (state) => state.token,
  loginUrl: (state) => state.url,
};

const mutations = {
  getToken(state, token) {
    state.token = token;
  },
  resetToken(state) {
    state.token = '';
  },
};

const actions = {
  fetchToken({ commit }, data) {
    commit('getToken', data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
