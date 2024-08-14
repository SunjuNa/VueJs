<template>
    <div>
        <h4>User Page</h4>
        <hr />
        <!-- 라우터 중첩(subpage에 router-view가 있음) -> route2.js에서 children으로 마저 마무리 가능 -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
