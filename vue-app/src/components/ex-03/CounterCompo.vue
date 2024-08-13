<template>
    <div>
        <!-- compo만들면 언제나 app.vue에 등록하는걸 잊지말라구~! -->
        <!-- 변수의 값이 변하는 걸 상태가 변했다고 한다(?) -->
        <h3>04. State</h3>
        <div>
            <button @click="--count">-</button>
            <span>Count:{{ count }}</span>
            <button @click="++count">+</button>
        </div>

        <!-- computed속성 -->
        <div>
            <button @click="--counter">-</button>
            <span>Count:{{ counter }}</span>
            <button @click="++counter">+</button>
            <!-- count와 따로따로 움직이고, 0이하로 내려가지 않는걸 볼 수 있다. -->
        </div>

        <!-- 공용저장 : reactive-store -->
        <!-- 여러명이 작업할때 reactive-store는 상태 관리가 쉽지 않으므로 VueX를 쓰게 된다. -->
        <div>
            <button @click="store.decrement()">-</button>
            <span>Count:{{ store.count }}</span>
            <button @click="store.increment()">+</button>
        </div>

        <div>
            <button @click="decrement">-</button>
            <span>Count:{{ countx }}</span>
            <!-- computed에 만든 값 -->
            <button @click="increment">+</button>
        </div>
    </div>
</template>

<script setup>
// import { store } from '../../store/reactive-store'; import {sto} tab하면 자동완성됨
import { store } from '@/store/reactive-store';
</script>

<script>
//mapGetters, mapActions를 helper라고 한다.
import { mapGetters, mapActions } from 'vuex'; //스크립트 나누면 안됨 - scope이 어쩌구저쩌구

export default {
    data() {
        return {
            count: 0,
            count1: 0,
        };
    },
    computed: {
        counter: {
            get() {
                return this.count1;
            },
            set(val) {
                if (val < 0) val = 0;
                this.count1 = val;
            },
        },
        /*
        countx() {
            //vuex의 값
            return this.$store.state.counter.countx; //vuex의 store
            //index.js에서 counter라는 이름을 줌
        },
        */
        ...mapGetters({ countx: 'counter/getCountx' }), //위의 countx가 만들어짐
        //vuex-store.js에서 가져온 getCountx임
    },
    methods: {
        /*
        //method아니고 methods임....
        increment() {
            this.$store.dispatch('counter/increment'); //counter밑의 increment라는 method
            //action 호출
        },
        decrement() {
            this.$store.dispatch('counter/decrement');
        },
        */
        //실제로는 계속 METHOD를 직접 만들진 않고 helper를 쓴다
        ...mapActions({ increment: 'counter/increment', decrement: 'counter/decrement' }),
    },
};
</script>

<style scoped></style>
