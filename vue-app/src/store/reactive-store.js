//vue 2.7부터 사용가능

import { reactive } from 'vue';

export const store = reactive({
    count: 0,
    increment() {
        ++this.count;
    },
    decrement() {
        --this.count;
    },
});
