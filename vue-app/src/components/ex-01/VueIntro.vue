<!-- vu라고 치면 나오는 자동완성 바로 함 -->
<template>
    <div>
        <h3>01. Vue Intro</h3>
        <div>
            <div v-if="visible">
                <span v-bind:title="message">{{ message }}</span>
                <input type="text" v-model="message" size="30" placeholder="model" /><br />
            </div>
            <div>
                <ol>
                    <li v-for="(todo, idx) in todos" v-bind:key="idx">{{ todo.text }}</li>
                </ol>
                <todo-list v-bind:todos="todos"></todo-list>
            </div>

            <input type="text" size="30" v-on:input="changeMessage($event)" />
            <!-- $event : built-in객체, 전역객체 -->

            <div>
                <select v-model="val_sal">
                    <!-- val_sal: 2로 해놨기 때문에 첨 page에서는 id=2번이 선택됐다가 checkbox선택이 달라지면 바뀐다 -->
                    <option v-for="(todo, idx) in todos" :key="idx" v-bind:value="todo.id">{{ todo.text }}</option>
                </select>
                {{ val_sal }}
            </div>

            <div>
                <label v-for="(todo, idx) in todos" :key="idx">
                    <input type="checkbox" :value="todo.id" v-model="val_chk" />
                    {{ todo.text }}
                </label>
                {{ val_chk }}
            </div>

            <div>
                <label v-for="(todo, idx) in todos" :key="idx">
                    <input type="checkbox" :value="todo.id" v-model="val_chk1" />
                    {{ todo.text }}
                </label>
                {{ val_chk1 }}
            </div>

            <div>
                <label v-for="(todo, idx) in todos" :key="idx">
                    <input type="radio" :value="todo.id" v-model="val_rdo" />
                    {{ todo.text }}
                </label>
                {{ val_rdo }}
            </div>

            <div>
                <label v-for="(todo, idx) in todos" :key="idx">
                    <input type="radio" :value="todo.id" v-model="val_rdo1" />
                    {{ todo.text }}
                </label>
                {{ val_rdo1 }}
            </div>
        </div>
    </div>
</template>

<script>
import TodoList from './TodoList.vue';
export default {
    data() {
        return {
            visible: true, //false시 안보임
            message: 'Hello Vue.js',
            todos: [
                { id: 1, text: 'Javascript 배우기' },
                { id: 2, text: 'Vue 배우기' },
                { id: 3, text: 'CSS 배우기' },
            ],
            val_sal: 2,
            val_chk: [], //checkbox는 여러개 선택 가능하기 때문에 배열로 넘겨야함
            val_chk1: [2, 3], //binding을 이용해 grouping
            val_rdo: 1,
            val_rdo1: 1,
        };
    }, //중요도 순으로 나열, 보통 component를 젤 마지막에 씀
    mounted() {
        //렌더링 완료된 후, DOM 접근 가능
        console.log('mounted');
    },
    beforeUpdate() {
        //리렌더링이 일어나기 전(리랜더링: 화면갱신)
        console.log('beforeUpdate');
    },
    updated() {
        //리렌더링이 일어난 뒤
        console.log('updated');
    },
    computed: {},
    watch: {},
    methods: {
        changeMessage: function (e) {
            // e-> event
            this.message = e.target.value;
        },
    },
    components: { TodoList },
};
</script>

<style scoped></style>
