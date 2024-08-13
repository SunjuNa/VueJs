<template>
    <div>
        <h5>자식 컴포넌트</h5>
        <i>{{ user }}님 안녕하세요. {{ msg + 123 }}!!!</i>
    </div>
</template>

<script>
export default {
    // 데이터를 받을 거면 props!
    // props: ['user', 'msg'],
    props: {
        user: String, //타입을 줄 수 있음, 다른 타입을 받으면 오류가 발생
        msg: String, //타입에는 Array, Number, Boolean,Function, Promise, Object ...
    },
};
</script>

<style scoped></style>
