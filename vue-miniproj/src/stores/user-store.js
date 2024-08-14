const store = {
    namespaced: true, //경로로 쓸수있겠끔?
    state() {
        //아 얘만 private이라 (){}로 처리하네
        return {
            user_info: {}, //편의상 로그인정보가 어떻게 들어올지 몰라서 빈객체로 해둠
        };
    },
    mutations: {
        //언제 state의 user_info를 변경할 것인가를 등록
        login(state, payload) {
            state.user_info = payload;
        },
        logout(state, payload) {
            // state.user_info = undefined;
            state.user_info = payload;
        },
        logfail(state, payload) {
            state.user_info = payload;
        },
    },
    actions: {
        login(context, payload) {
            context.commit('login', payload);
        },
        logout(context, payload) {
            context.commit('logout', payload);
        },
        loginfail(context, payload) {
            context.commit('logfail', payload);
        },
    },
    getters: {
        getUserInfo(state) {
            return state.user_info;
        },
    }, //index.js에 등록 ㄱㄱ
};

export default store;
