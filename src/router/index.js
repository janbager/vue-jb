import Vue from 'vue';
import Router from 'vue-router';
import Home from '../modules/home/components/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '*',
      name: 'Home',
      component: Home,
    },
  ],
});
