<template>
    <div>
        <h3>Login</h3>
        <form @submit="doLogin">
            id: <input type="text" required v-model="id" />
            <br />
            pwd: <input type="text" required v-model="pwd" />
            <br />
            <button type="submit">로그인</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';

const checkUser = async (userid, password) => {
    //async : promise객체로 반환
    const res = await axios.get('http://localhost:3003/login', {
        params: { username: userid, password: password },
        withCredentials: true, //corsOption적용
    }); //데이터가 res에 담아진다

    //server.mjs에서 res.json([~])배열로 오는 걸 확인할 수 있음
    //아래는 간단하게 설명하려고 만든것일뿐, 나중에 프로젝트할때는 다른 걸로 바꿔서 쓰면 됨
    const data = res.data[0];
    if (data.user_id == userid && data.password === password) {
        return true;
    } else {
        return false;
    }
};

export default {
    data() {
        return {
            id: '',
            pwd: '',
        };
    },
    computed: {
        ...mapGetters({ user_info: 'user/getUserInfo' }), //user: index.js에 등록한 그거임
    },
    methods: {
        doLogin(e) {
            //e : event
            e.preventDefault();
            console.log(this.id, this.pwd);
            checkUser(this.id, this.pwd).then((result) => {
                if (result) {
                    alert('로그인에 성공하였습니다.');
                    this.login({ user_id: this.id, check: true });
                    this.$router.push('/'); //main Page로 이동
                    //로그인 -> 로그아웃으로 바꾸고, header도 ~님 환영합니다 해야함
                    //vuex를 사용해야함(공통자원공유)
                } else {
                    alert('로그인에 실패하였습니다.');
                    this.loginfail({ user_id: null, check: false });
                }
            }); //promise
        },
        ...mapActions({ login: 'user/login', logout: 'user/logout', loginfail: 'user/loginfail' }),
    },
};
</script>

<style scoped></style>
