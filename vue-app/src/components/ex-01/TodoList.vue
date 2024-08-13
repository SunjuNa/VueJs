<template>
    <ul>
        <li v-for="(todo, idx) in todos" v-bind:key="idx">{{ todo.text }}</li>
    </ul>
</template>

<script>
export default {
    props: ['todos'],
};
</script>

<style scoped>
ul {
    list-style: none;
    padding: 5px;
}
ul li::before {
    content: '★';
}
</style>
