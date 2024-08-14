<template>
    <div>
        <h3>06.Vue Slot</h3>
        <div-compo>메세지입니다</div-compo>
        <div-compo>
            <i>
                <div-compo>
                    <b>홍길동님 {{ message }}</b>
                </div-compo>
            </i>
        </div-compo>
        <div-compo></div-compo>

        <div-compo>
            <ul-compo>
                <template v-slot:header>헤더입니다.</template>
                <!--header: slotname-->
                <template>내용입니다.</template>
                <template #footer>푸터입니다.</template>
                <!-- #: v-slot의 약자 -->
                <template #condition></template>
            </ul-compo>

            <!-- 자식 -> 부모 전달된 데이터 이용, v-slot, 자식 속성이용 -->
            <!-- 이벤트로 하지않아도 자식 -> 부모로 데이터를 전해주는게 편해진다. -->
            <props-compo v-slot="slotProps">
                {{ slotProps.user }}님 환영합니다. {{ slotProps.count }}번째 방문입니다.
            </props-compo>

            <props-compo v-slot="{ user, count }"> {{ user }}님 환영합니다. {{ count }}번째 방문입니다. </props-compo>
        </div-compo>

        <div-compo>
            <slot-compo>
                <!-- 자식 -> 부모 전달된 데이터 이용. name, 자식 속성이용 -->
                <!-- #: v-slot -->
                <template #header="props">"{{ props.message }}"</template>
            </slot-compo>
        </div-compo>

        <div-compo>
            <slot-list>
                <template #item="{ msg, username, likes }"> {{ msg }} by {{ username }} : {{ likes }} likes </template>
            </slot-list>
        </div-compo>
    </div>
</template>

<script>
//slot : template을 template한테 넘기는 사용
//custom화 된 출력이 필요하면 slot을 사용, template은 니네가 만들어 slot만들어놨으니까...
const DivCompo = {
    //DivCompo : component
    template: `<div style='border:1px solid silver'><slot>대체내용</slot></div>`,
};

const UlCompo = {
    template: `<ul>
        <li><slot name="header"></slot></li>    
        <li><slot></slot></li>    
        <li><slot name="footer"></slot></li>    
        <li><slot name="footer"></slot></li>    
        <li v-if="$slots.condition"><slot name="condition">기본값</slot></li>
    </ul>`,
    // v-if="$slots.condition" : 슬롯에 컨디션이 없으면 출력을 하지 마세요
};

// import PropsCompo from '@/components/ex-05/PropsCompo.vue';
import PropsCompo from './PropsCompo.vue';

const SlotCompo = {
    data() {
        return {};
    },
    template: `<div>
        <mark><slot name="header" message="안녕하세요."></slot>???</mark>
    </div>`,
};

import SlotList from './SlotList.vue';

export default {
    data() {
        return {
            message: '안녕하세요',
        };
    },
    components: {
        DivCompo,
        UlCompo,
        PropsCompo,
        SlotCompo,
        SlotList,
    },
};
</script>

<style scoped></style>
