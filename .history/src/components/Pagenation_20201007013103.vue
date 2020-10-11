<template>
    <div class="pagenation">

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
    setup(props) {
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