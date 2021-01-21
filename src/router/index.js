import Vue from 'vue';
import Router from 'vue-router';
import Carousel  from '@/components/Carousel';
import Card  from '@/components/Card';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/carousel',
      name: 'Carousel',
      component: Carousel
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    },
  ]
})
