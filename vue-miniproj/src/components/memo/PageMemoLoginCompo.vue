<template>
    <div>
        <template v-if="login">
            <h3>메모장</h3>
            <hr />
            <router-view></router-view>
        </template>
        <template v-else>
            <h3>로그인 필요</h3>
        </template>
    </div>
</template>

<script>
import axios from 'axios';

const checkUser = async () => {
    const res = await axios.get('http://localhost:3003/mypage', {
        params: {},
        withCredentials: true,
    });

    const data = res.data;
    if (data.code === '200') {
        return true;
    } else {
        return false;
    }
};
export default {
    data() {
        return { login: false };
    },
    mounted() {
        checkUser().then((result) => {
            this.login = result;
        });
    },
};
</script>

<style scoped></style>
