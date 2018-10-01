import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Message from './Message.vue';
import Overview from './OverviewScreen';
import Main from './MainScreen';
//Using calendar component from GitHub: https://github.com/liloow/vue-draggableCal#install
import DraggableCal from 'vue-draggable-cal';
// Using slider componant from GitHub:
// import vueSlider from 'vue-slider-component'



Vue.use(VueRouter);

const routes = [{
  path: '/main',
  component: Main
}, {
  path: '/',
  component: Overview
}, ];

const router = new VueRouter({
  routes
})

Vue.component('app-message', Message);
Vue.component('overview-screen', Overview);
Vue.component('main-screen', Main);
Vue.component('draggable-cal', DraggableCal);
// Vue.component('vue-slider', vueSlider);


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
