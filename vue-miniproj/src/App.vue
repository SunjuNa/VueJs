<template>
    <div style="width: 1024px; margin: 0 auto; border: 1px solid navy">
        <!-- border로 개발할 때 보기 위해 주는 거임 -->
        <!-- 원래는 저 style을 base.css에 넣는걸 추천함  -->
        <header-compo></header-compo>
        <middle-compo></middle-compo>
        <footer-compo></footer-compo>
    </div>
</template>

<script>
import FooterCompo from './components/layout/FooterCompo.vue';
import HeaderCompo from './components/layout/HeaderCompo.vue';
import MiddleCompo from './components/layout/MiddleCompo.vue';
export default {
    name: 'App',
    components: { HeaderCompo, MiddleCompo, FooterCompo },
};
</script>

<style>
/* scoped가 없기 때문에 전역이 된다. 따라서 전역 style을 쓰고 싶을 때 여기에 준다. */
@import 'assets/base.css';
div {
    color: #2c3e50; /* 요즘 글자 색깔을 검정색은 안쓰고 검정색 비스무리한 색을 씀 */
}
</style>
