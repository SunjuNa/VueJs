<template>
    <div>
        <button type="button" @click="doLogout">로그아웃</button>
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex'; //로그아웃은 정보를 가져올 필요는 없으니 mapGetters를 지운다.

const checkLogout = async (userid, password) => {
    //server.mjs에서 보듯 매개변수 없는데 그냥 복사본대로 놔두도록 하겠음
    const res = await axios.get('http://localhost:3003/logout', {
        params: { username: userid, password: password },
        withCredentials: true,
    });

    const data = res.data; //객체로 보내니까
    if (data.code == '200') {
        return true;
    } else {
        return false;
    }
};

export default {
    methods: {
        doLogout(e) {
            checkLogout().then((result) => {
                if (result) {
                    alert('로그아웃에 성공하였습니다.');
                    this.logout({ user_id: null, check: false });
                    this.$router.push('/'); //main Page로 이동
                }
            }); //promise
        },
        ...mapActions({ logout: 'user/logout' }),
    },
};
</script>

<style scoped></style>
