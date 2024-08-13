<template>
    <div>
        <h5>자식 컴포넌트2</h5>
        <i>{{ user }}님 안녕하세요. {{ msg }}</i>
        <button type="button" @click="handleClick">부모변경</button>
    </div>
</template>

<script>
export default {
    props: ['user', 'msg'],
    methods: {
        handleClick() {
            this.$parent.$refs.ref_dis.innerHTML = '자식에서 변경';
            //지금 컴포넌트의 부모의 $ref에 ref_dis를 다음과 같이 설정한다.
        },
    },
};
</script>

<style scoped></style>
