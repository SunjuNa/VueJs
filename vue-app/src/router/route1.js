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
    {
        path: '/page2/:user', //props: user로 줌
        component: SubPage2,
        props: true, //데이터를 활성화시키기위해 props를 활성화
    },
    {
        //named router : 이름있는 router, path이름이 바뀌면 모두 코드를 변경해야하는데 한번
        //바꾸면 바로 단숨에 바뀌는 걸 원할 때 상용한다.
        path: '/page2/named/:user',
        name: 'named-router', //라우터에 named-router라는 이름을 붙임
        component: SubPage2,
        props: true, //데이터를 활성화시키기위해 props를 활성화
    },
    {
        path: '/page2/named/:user/age/:age',
        name: 'named-router2',
        component: SubPage2,
        props: true,
    },
    {
        path: '/page2/type/:age(\\d+)',
        // d: digit, digit이 한번이상 나온다는 뜻, 나이는 숫자만 받아야하니까....
        //정규식이라고 한다.
        component: SubPage2,
        props: true,
    },
];
