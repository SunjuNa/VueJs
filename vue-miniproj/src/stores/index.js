import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import UserStore from '@/stores/user-store';

//Store : 대문자야....
const store = new Vuex.Store({
    modules: {
        user: UserStore, //store등록 완료
    },
});

export default store; //store등록하러 main.js로 가자
