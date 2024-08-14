// index.js에 route2등록하는거 잊지 말라구~!
import SubPage3 from '@/components/ex-04/SubPage3.vue';
import SubPage4 from '@/components/ex-04/SubPage4.vue';
import SubPage5 from '@/components/ex-04/SubPage5.vue';
//왜 자동import가 안돼에에ㅔ에에ㅔ

export default [
    {
        path: '/goto/page2/:user',
        redirect: (to) => {
            //to: 매개변수
            return { path: `/page2/${to.params.user}` }; //백틱 주의
            //return {path: '/page2/'+to.params.user} 와 같음
        },
    },
    {
        path: '/user',
        component: SubPage3,
        children: [
            { path: 'posts', component: SubPage4 },
            //   /posts로 하면 절대 경로가 되기 때문에, children의 path는 /로 시작하면 안됨
            { path: 'info', component: SubPage5 },
        ],
    },
];
