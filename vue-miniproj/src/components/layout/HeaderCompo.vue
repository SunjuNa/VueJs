<template>
    <div class="header" style="display: flex">
        <h3>Header</h3>
        <div class="info" v-if="user_info.check">
            {{ user_info.user_id }}님 환영합니다. <router-link to="logout">로그아웃</router-link>
        </div>
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

<style scoped>
h3 {
    width: 70%;
}
.info {
    flex: 1 0;
    align-self: flex-end;
}
</style>
