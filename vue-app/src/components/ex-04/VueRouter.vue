<template>
    <div>
        <!-- 1. component 생성(전체 페이지용) -> 2. app.vue에 component등록 -> 3.router 총 등록(index.js),route1.js만듬(index.js) -->
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
            <li><router-link to="/page2/홍길동">page2/홍길동</router-link></li>
            <!-- named router -->
            <li>
                <router-link v-bind:to="{ name: 'named-router', params: { user: '홍길동1' } }"
                    >page2/named/홍길동1</router-link
                >
            </li>
            <li><router-link to="/page2/named/홍길동2/age/20">page2/named/홍길동2/age/20</router-link></li>
            <li>
                <!--위와 동일 -->
                <router-link v-bind:to="{ name: 'named-router2', params: { user: '홍길동3', age: 21 } }"
                    >page2/named/홍길동3/age/21</router-link
                >
            </li>
            <li><router-link to="/page2/type/22">page2/type/22</router-link></li>
            <li><router-link to="/page2/type/abc">page2/type/abc</router-link></li>
            <!-- abc는 페이지가 나오지 않음 : pageNotFound로 처리된다고 보면 됨 -->
            <li><router-link to="/page2/type">page2/type</router-link></li>
            <li><router-link to="/goto/page2/홍길동">/goto/page2/홍길동</router-link></li>
        </ul>

        <ul>
            <li><router-link to="/user">/user</router-link></li>
            <li><router-link to="/user/info">/user/info</router-link></li>
            <li><router-link to="/user/posts">/user/posts</router-link></li>
        </ul>

        <div style="border: 1px solid grey; padding: 10x">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
    display: flex;
    flex-wrap: wrap; /* 줄바꿈 */
    justify-content: center;
}
ul li {
    flex: 1 0 200px; /* 확대함, 축소안함, 최소사이즈:200px */
}
</style>
