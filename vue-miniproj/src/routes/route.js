import MiddleFront from '@/components/layout/MiddleFront.vue';
import PageMemoCompo from '@/components/memo/PageMemoCompo.vue';

import PageLogin from '@/components/pages/PageLogin.vue';
import PageLogout from '@/components/pages/PageLogout.vue';
import PageMain from '@/components/pages/PageMain.vue';
import PageMyPage from '@/components/pages/PageMyPage.vue';

export default [
    {
        path: '/',
        component: MiddleFront,
        children: [
            {
                path: 'main' /* 절대 /적지마, 절대경로로 잡힘!! */,
                component: PageMain /* 자동 임포트됨 */,
                alias: ['/'],
            },
            { path: 'mypage', component: PageMyPage },
            //menuCompo에 경로 적으러 가자
            { path: 'login', component: PageLogin },
            { path: 'logout', component: PageLogout },
            {
                path: 'memo',
                component: PageMemoCompo,
                children: [
                    {
                        path: '', //memo와 동일한 path라는 뜻
                        component: () => import('@/components/memo/MemoListCompo.vue'),
                        //지연된 importing : mainPage야 import되고 routing해도 되지만, 다른 page는 page로딩이
                        //느려지면 별로이기 때문에 지연된 importing을 사용한다.
                    },
                    {
                        path: 'input/:idx?', //idx유무로 수정, 등록을 판별한다.
                        component: () => import('@/components/memo/MemoInputCompo.vue'),
                    },
                ],
            },
        ],
    },
];
