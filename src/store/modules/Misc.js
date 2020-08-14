const state = {
  dialog: false,
};

const getters = {
  getDialog: (state) => state.dialog,
};

const mutations = {
  setDialog: (state) => {
    state.dialog = !state.dialog;
  },
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
