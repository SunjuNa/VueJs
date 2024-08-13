import Vue from 'vue';
import App from './App.vue';
import store from './store/index';
import router from './router/index';

Vue.config.productionTip = false;

//Global Compo 등록
import GlobalCompo from './components/ex-02/GlobalCompo.vue';
Vue.component('global-compo', GlobalCompo);

new Vue({
    render: (h) => h(App),
    store,
    router,
}).$mount('#app');
