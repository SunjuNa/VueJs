<!-- VueSlot의 자식 component -->
<template>
    <div style="background-color: aquamarine"><slot v-bind:user="user" :count="1"></slot></div>
</template>

<script>
export default {
    data() {
        return { user: '홍길동' };
    },
};
</script>

<style scoped></style>
