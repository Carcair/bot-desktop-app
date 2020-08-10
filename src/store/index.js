import Vue from 'vue';
import Vuex from 'vuex';

/**
 * Loading store modules
 */
import Login from './modules/Login';
import Message from './modules/Message';
import Schedules from './modules/Schedules';
import Triggers from './modules/Triggers';
import Reports from './modules/Reports';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Message,
    Login,
    Schedules,
    Triggers,
    Reports,
  },
});
