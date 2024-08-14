<template>
    <div>
        <h4>Page2입니다.</h4>
        <router-link to="/home">Page1</router-link>
        <div>User: {{ user }}</div>
        <div>age: {{ age }}</div>

        <div>User: {{ $route.params.user }}</div>
        <!-- 주소를 통해 넘어온 param중에 user를 사용하겠다 -->
        <!-- props선언을 못하거나, props: true를 못쓸 경우 이처럼 사용 -->
        <!-- 근데 보통 선언을 하고 쓰니까 이런게 있다정도로만 알고 넘어가자 -->
        <div>age: {{ $route.params.age }}</div>
    </div>
</template>

<script>
export default {
    props: ['user', 'age'],
};
</script>

<style scoped></style>
