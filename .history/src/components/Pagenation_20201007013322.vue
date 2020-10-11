<template>
    <div class="pagenation">
        <ul>
            <li v-for="page in pagenation.start" :key="page">{{ page }}</li>
            <li v-for="page in pagenation.center" :key="page">{{ page }}</li>
            <li v-for="page in pagenation.end" :key="page">{{ page }}</li>
        </ul>
    </div>
</template>

<script lang="ts">
import usePagenation from '@/composables/pagenation';
import { defineComponent, PropType, reactive } from "@vue/composition-api";

export default defineComponent({
    props: {
        prefixUrl: {
            type: String,
            required: true,
        },
    },
    setup() {
        const pagenation = usePagenation();
        return {
            pagenation
        };
    }
});
</script>

<style lang="scss">
.pagenation {
    ul {
        display: flex;
        flex-direction: row;
        li {
            border: 1px solid #ddd;
            padding: 0.5rem 1rem;
            text-align: center;
        }
    }
}
</style>