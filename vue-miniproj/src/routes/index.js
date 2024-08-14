import Vue from 'vue';

import VueRouter from 'vue-router';

import route from '@/routes/route';
import PageNotFound from '@/components/pages/PageNotFound.vue';

Vue.use(VueRouter);

const base_router = [{ path: '*', component: PageNotFound }];

export default new VueRouter({
    mode: 'history',
    routes: [...route, ...base_router],
});
