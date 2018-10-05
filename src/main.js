import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Message from './Message.vue';
import Overview from './OverviewScreen.vue';
import Main from './MainScreen';
import Confirmation from './confirmation.vue'
//Using calendar component from GitHub: https://github.com/liloow/vue-draggableCal#install
import DraggableCal from 'vue-draggable-cal';
// Using slider componant from GitHub: https://github.com/NightCatSama/vue-slider-component
import vueSlider from 'vue-slider-component'
import SingleSlider from './singleSlider.vue';
import DoubleSlider from './doubleSlider.vue';



Vue.use(VueRouter);

const routes = [{
  path: '/main',
  component: Main
}, {
  path: '/confirmation',
component: Confirmation
}, {
  path: '/',
  component: Overview
},];

const router = new VueRouter({
  routes
});

Vue.component('app-message', Message);
Vue.component('overview-screen', Overview);
Vue.component('main-screen', Main);
Vue.component('draggable-cal', DraggableCal);
Vue.component('vue-slider', vueSlider);
Vue.component('single-slider', SingleSlider);
Vue.component('double-slider', DoubleSlider);
Vue.component('confirmation-screen', Confirmation);


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
