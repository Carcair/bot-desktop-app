import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Messages from '../views/Messages.vue';
import Schedules from '../views/Schedules.vue';
import Triggers from '../views/Triggers.vue';
import Reports from '../views/Reports.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages,
  },
  {
    path: '/schedules',
    name: 'Schedules',
    component: Schedules,
  },
  {
    path: '/triggers',
    name: 'Triggers',
    component: Triggers,
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Reports,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
