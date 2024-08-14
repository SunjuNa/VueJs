<template>
    <div>
        <h3>내용</h3>
        <form @submit="handleInsert">
            id: {{ memo.id }}
            <br />
            title : <input type="text" name="title" v-model="memo.title" />
            <br />
            content : <textarea name="content" v-model="memo.content" />
            <br />
            createdAt: {{ memo.createdAt }}
            <br />
            updatedAt: {{ memo.updatedAt }}
            <br />
            <button type="button" @click="handleUpdate" v-if="idx">수정</button>
            <button type="submit" v-if="!idx">등록</button>
            <button type="button" @click="handleDelete" v-if="idx">삭제</button>
            <button type="button" @click="$router.push('/memo')">리스트</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

const loadMemo = async (idx) => {
    const res = await axios.get(`http://localhost:3003/memos/${idx}`, {
        params: {},
        withCredentials: true,
    });

    return res.data;
};

const insertMemo = async (memo) => {
    const { id, createdAt, updatedAt, ...data } = memo;
    //jpa같은 sk?을 사용하기 때문에 id, createdAt, updatedAt을 알아서만들어줌
    //id, createdAt, updatedAt를 뺀 나머지를 data로 집어넣겠다는 의미임
    console.log(memo, data);
    const res = await axios.post('http://localhost:3003/memos', data, {
        withCredentials: true,
    });

    return res.data;
};

const deleteMemo = async (idx) => {
    console.log(idx);
    const res = await axios.delete(`http://localhost:3003/memos/${idx}`, {
        withCredentials: true,
    });

    return res.data;
};

const updateMemo = async (memo) => {
    const { id, createdAt, updatedAt, ...data } = memo;
    console.log(memo, data);

    const res = await axios.put(`http://localhost:3003/memos/${memo.id}`, data, {
        withCredentials: true,
    });

    return res.data;
};

export default {
    data() {
        return {
            idx: this.$route.params.idx,
            memo: { id: '', title: '', content: '', createdAt: '', updatedAt: '' },
        };
    },
    mounted: function () {
        console.log(this.idx);
        if (this.idx !== undefined) {
            loadMemo(this.idx).then(
                function (result) {
                    this.memo = result;
                }.bind(this),
            );
        }
    },
    methods: {
        handleInsert: function (e) {
            e.preventDefault();
            insertMemo(this.memo).then(() => {
                alert('등록완료');
                this.$router.push('/memo');
            });
        },
        handleUpdate: function () {
            updateMemo(this.memo).then(() => {
                alert('수정완료');
                this.$router.push('/memo');
            });
        },
        handleDelete: function () {
            deleteMemo(this.idx).then((result) => {
                alert(result.message);
                this.$router.push('/memo');
            });
        },
    },
};
</script>

<style scoped></style>
