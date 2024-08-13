<template>
    <div id="app1">
        <HelloWorld msg="안녕하세요. Vue.js 입니다" />
        <hr />
        <VueIntro></VueIntro>
        <hr />
        <VueCompo />
        <hr />
        <CounterCompo />
        <hr />
        <VueRouter />
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import VueIntro from './components/ex-01/VueIntro.vue';
import VueCompo from './components/ex-02/VueCompo.vue';
import CounterCompo from './components/ex-03/CounterCompo.vue';
import VueRouter from './components/ex-04/VueRouter';

export default {
    name: 'App',
    components: {
        HelloWorld,
        VueIntro,
        VueCompo,
        CounterCompo,
        VueRouter,
    },
};
</script>

<style>
/* #app1 {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
} */
</style>
