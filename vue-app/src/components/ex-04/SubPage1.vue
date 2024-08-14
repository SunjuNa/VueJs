<template>
    <div>
        <h4>Page1입니다.</h4>
        <button type="button" v-on:click="goPage">Page2</button>
    </div>
</template>

<script>
export default {
    methods: {
        /* goPage() {},와 아래는 같다.*/
        //이벤트로 넘기는 방법
        goPage: function () {
            this.$router.push('/page2/홍길동');
            // Vue에 등록한 전역객체 router(built-in객체임, 따라서 굳이 만들 필요가 없음)
            // 페이지 이동할때 push를 쓰면 됨

            // this.$router.replace('/page2/홍길동');
            //page이동 history를 남기고 싶지 않으면 replace를 사용
            //로그인 페이지를 로그인하고 뒤로가기 하면 로그인페이지로 다시 돌아가면 안되니까 그런거
            //사용할 때 주로 사용
        },
    },
};
</script>

<style scoped></style>
