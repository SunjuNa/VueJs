const store = {
    //이름은 아무거나 줘도 됨
    namespaced: true,
    //영역 4가지
    //마치 MVC구조...
    state() {
        //상태를 선언하는 영역
        //비유하자면 spring에서의 vo
        return {
            //return : 비유하자면 private 선언같은
            countx: 0,
            obj: { countx: 0 },
        };
    },
    mutations: {
        //상태 변경 영역
        //비유하자면 spring에서의 jpa repository에서의... crud...같은...?
        increment(state) {
            ++state.countx;
        },
        decrement(state) {
            --state.countx;
        },
        resetValue(state) {
            state.countx = 0;
        },
    },
    actions: {
        //mutation조합을 만들때
        //비유하자면 spring에서의 service
        increment(context) {
            context.commit('increment'); //mutation의 함수 속성이름인 increment
        },
        decrement(context) {
            context.commit('decrement');
        },
        resetValue(context) {
            context.commit('resetValue');
        },
    },
    getters: {
        //getter 생성
        //비유하자면 spring에서의 데이터읽기
        getCountx(state) {
            return state.countx;
        },
    },
};

export default store;
