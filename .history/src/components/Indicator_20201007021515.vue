<template>
    <div class="indicator">
        <MoonLoader
            :loading="loading"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import PulseLoader from 'vue-spinner/src/PulseLoader';

export default defineComponent({
    props: {
        loading: {
            type: Boolean,
            default: true,
        }
    },
    components: {
        MoonLoader
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
