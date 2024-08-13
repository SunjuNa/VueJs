import Vue from 'vue';

//import VueRouter from 'vue-router';
import VueRouter from 'vue-router';
//import가 된다는데 왜 안돼....

import route1 from './route1';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    //abstract
    //hash : #page1
    //history : server를 이용하는 방법
    routes: [...route1],
}); //main.js에 vue instance가 있으니 등록하러가자
