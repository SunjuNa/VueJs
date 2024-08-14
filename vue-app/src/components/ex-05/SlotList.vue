<template>
    <ul>
        <li v-for="(item, idx) in items" :key="idx">
            <!-- {{  }}하면 되는데 그건 다른사람일로 넘길거야 -->
            <slot name="item" v-bind="item"></slot>
            <!-- 데이터 통째로 넘기고 싶을때 v-bind="item" -->
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            items: [
                //데이터를 ajax로 가져왓다고 가정하고 한다.
                { msg: '둘리가 올린 메세지', username: '둘리', likes: 20 },
                { msg: '고길동이 올린 메세지', username: '고길동', likes: 10 },
            ],
        };
    },
};
</script>

<style scoped>
li {
    list-style: none;
}
li::before {
    content: '◇';
}
</style>
