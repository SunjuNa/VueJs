import SubPage2 from '@/components/ex-04/SubPage2.vue';

import SubPage1 from '@/components/ex-04/SubPage1.vue';

export default [
    {
        path: '/page1',
        component: SubPage1,
        alias: ['/home'],
    },
    {
        path: '/page2',
        component: SubPage2,
    },
];
