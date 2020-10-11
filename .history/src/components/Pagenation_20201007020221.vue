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
import { PagenationData } from '@/composables/pagenation';
import { defineComponent, PropType } from "@vue/composition-api";

export default defineComponent({
    props: {
        prefixUrl: {
            type: String,
            required: true,
        },
        pagenation: {
            type: Object as PropType<PagenationData>,
        }
    },
});
</script>

<style lang="scss">
.pagenation {
    margin-top: 2rem;
    ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        
        li {
            border: 1px solid #ddd;
            padding: 0.5rem 1rem;
            text-align: center;
        }
    }
}
</style>