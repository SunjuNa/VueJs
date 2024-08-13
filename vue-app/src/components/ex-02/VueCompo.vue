<template>
    <div>
        <h3>02. Global/Local component</h3>
        <global-compo></global-compo>
        <!-- <glo라고 쓰면 자동완성 됨-->
        <!-- 전역이라 import를 없애도 잘 나옴 -->
        <local-compo></local-compo>
        <!-- <LocalCompo /> 로 적어도 되나, 캐밥표기법이 import도 되고 좋다. -->
        <hr />
        <h3>03. 부모자식간 데이터 전달</h3>
        <parent-compo></parent-compo>
    </div>
</template>

<script>
import LocalCompo from './LocalCompo.vue';
import ParentCompo from './ParentCompo.vue';
export default {
    components: { LocalCompo, ParentCompo },
};
</script>

<style scoped></style>
