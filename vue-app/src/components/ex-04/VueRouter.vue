<template>
    <div>
        <!-- 1. component 생성 -> 2. app.vue에 component등록 -> 3.router 총 등록(index.js),route1만듬(index.js) -->
        <!-- 4.라우트와 연결할 서브페이지 만듬(component) 5. route1.js에서 서브페이지와 매핑함  -->
        <!-- 6. vueRouter에서 사용함 -->
        <!-- 위는 route 요소라서 이div 밖을 나갈 수 없음 -->
        <h3>05. VueRouter</h3>
        <p>
            <strong>현재 라우트 경로 : {{ $route.fullPath }}</strong>
        </p>
        <ul>
            <li><router-link to="/page1">Page1</router-link></li>
            <li><router-link to="/page2">Page2</router-link></li>
        </ul>
        <div style="border: 1px solid grey; padding: 10x">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
