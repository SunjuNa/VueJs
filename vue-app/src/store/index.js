// 많은 사람들이 사용할 수 잇으므로 그것을 통합적으로 관리할 문서가 필요한데 그것이 index.js이다.
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); //vuex등록

import CountStore from '@/store/vuex-store'; //이름은 아무거나 준것이다.

const store = new Vuex.Store({
    modules: {
        counter: CountStore, //앞으로는 counter라는 이름으로 쓰면 됨 - CounterCompo에서
    },
});

console.log('index.js', store.state.counter); //store는 위의 const store임

export default store;

//vue instance는 main.js에서 관리 -> store등록
