<template>
    <div>
        <h5>자식 컴포넌트1</h5>
        <i v-on:click="handleClick">{{ user }}님 안녕하세요.</i>
        <button type="button" @click="handleClick">부모변경</button>
        <!--  @: v-on과 같음 -->
    </div>
</template>

<script>
export default {
    props: ['user'],
    methods: {
        handleClick() {
            this.$emit('send', this.user);
        },
    },
};
</script>

<style scoped></style>
