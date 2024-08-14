<template>
    <div>
        <h3>리스트</h3>
        <section>
            <table border="1">
                <thead>
                    <tr>
                        <th style="width: 50px">번호</th>
                        <th>제목</th>
                        <th style="width: 100px">등록일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(memo, idx) in memos" :key="idx">
                        <td>{{ memo.id }}</td>
                        <td>
                            <router-link :to="'/memo/input/' + memo.id">{{ memo.title }}&nbsp;</router-link>
                            <!-- 제목이 없으면 안지워지니까 &nbsp로 제목이 없어도 title이 뜨게 만듬 -->
                        </td>
                        <td>{{ memo.createdAt.substring(0, 10) }}</td>
                    </tr>
                </tbody>
            </table>
            <button type="button" @click="$router.push('/memo/input')">등록</button>
            <!-- 메소드 선언 없이 /memo/input이라고 그냥 보낼 수도 있다. -->
            <div>검색: <input type="text" @input="searchMemo" /></div>
        </section>
    </div>
</template>

<script>
import axios from 'axios';

const loadMemo = async () => {
    const res = await axios.get('http://localhost:3003/memos', {
        params: {},
        withCredentials: true,
    });

    return res.data;
};

const searchMemo = async (keyword) => {
    const res = await axios.get('http://localhost:3003/memos', {
        params: { keyword: keyword },
        withCredentials: true,
    });

    return res.data;
};

export default {
    data() {
        return {
            memos: [],
        };
    },
    mounted: function () {
        loadMemo().then((result) => (this.memos = result)); //loadMemo() : 다 갖고와
    },
    methods: {
        searchMemo: function (e) {
            const keyword = e.currentTarget.value;
            searchMemo(keyword).then((result) => {
                this.memos = result;
            });
        },
    },
};
</script>

<style scoped>
section {
    margin: 0px auto;
    width: 800px;
}
table {
    border-collapse: 'collapse';
    width: 600px;
}
</style>
