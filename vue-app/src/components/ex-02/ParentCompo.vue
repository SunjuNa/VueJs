<template>
    <div>
        <h4>부모컴포넌트</h4>
        <div>
            <input type="text" v-model="username" />
            <h4>부모 -&gt; 자식 : 자식 props</h4>
            <child-compo :user="username" msg="반갑습니다."></child-compo>
            <!-- user는 데이터 바인딩을 통해 가져온거고 msg는 고정값으로 가져온거임 -->

            <h4>부모 &lt;- 자식 : 자식(보낼event 생성), 부모(자식 이벤트 사용)</h4>
            <child-compo-1 :user="username" v-on:send="callback"></child-compo-1>

            <h4>부모 &lt;- 자식 : ref 이용(요소 조작(handling))</h4>
            <child-compo-2 :user="username" msg="반갑습니다." ref="compo2"></child-compo-2>
            <i ref="ref_dis"></i>
            <!-- $refs라는 전역객체에 저장됨 : 요소에 직접 연결하겠다 -->
            <button type="button" @click="changeRefData">자식변경</button>
        </div>
    </div>
</template>

<script>
import ChildCompo from './child/ChildCompo.vue';
import ChildCompo1 from './child/ChildCompo1.vue';
import ChildCompo2 from './child/ChildCompo2.vue';
export default {
    data() {
        return { username: '홍길동' };
    },
    methods: {
        callback(param) {
            console.log(`자식컴포넌트가 보낸 데이터: ${param}`);
        },
        changeRefData() {
            // this.$refs.compo2.user = '고길동'; //요소 단위
            this.username = '고길동'; //binding단위
        },
    },
    components: { ChildCompo, ChildCompo1, ChildCompo2 },
};
</script>

<style scoped></style>
