<template>
    <div class="indicator">
        <PulseLoader
            :loading="loading"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

export default defineComponent({
    props: {
        loading: {
            type: Boolean,
            default: true,
        }
    },
    components: {
        PulseLoader
    },
});

</script>

<style lang="scss">
.indicator {
    display:flex;
    flex:1;
    align-items: center;
    justify-content: center;
}
</style>>
