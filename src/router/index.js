import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '@/components/MainPage';
import Study1 from '@/components/Study1';
import Study2 from '@/components/Study2';
import Study3 from '@/components/Study3';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/study1',
      name: 'Study1',
      component: Study1
    },
    {
      path: '/study2',
      name: 'Study2',
      component: Study2
    },
    {
      path: '/study3',
      name: 'Study3',
      component: Study3
    }
  ]
});
