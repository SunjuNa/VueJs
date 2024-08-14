import Vue from 'vue';

//import VueRouter from 'vue-router';
import VueRouter from 'vue-router';
//import가 된다는데 왜 난 안돼....?

import route1 from './route1';
import route2 from './route2';

import PageNotFound from '@/components/ex-04/PageNotFound.vue';

Vue.use(VueRouter);

const base_router = [{ path: '*', component: PageNotFound }]; // path:'*'는 앞에 경로를 다 통과하고의 의미임

export default new VueRouter({
    mode: 'history',
    //abstract
    //hash : #page1
    //history : server를 이용하는 방법
    routes: [...route1, ...route2, ...base_router],
}); //main.js에 vue instance가 있으니 등록하러가자
