<template>
    <div class="menu">
        <h3>Menu</h3>
        <ul>
            <li><router-link to="/main">메인</router-link></li>
            <li><router-link to="/mypage">마이페이지</router-link></li>
            <li>
                <router-link to="/login" v-if="!user_info.check">로그인</router-link>
                <router-link to="/logout" v-if="user_info.check">로그아웃</router-link>
            </li>
            <li><router-link to="/memo">메모</router-link></li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters({ user_info: 'user/getUserInfo' }),
    },
};
</script>

<style scoped></style>
