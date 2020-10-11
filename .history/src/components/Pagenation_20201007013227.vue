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
.issue-list-item {
    h4 {
        margin-bottom: 0.4rem;
    }
}
</style>