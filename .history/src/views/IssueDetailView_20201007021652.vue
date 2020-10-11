<template>
  <div class="issue-detail-view">
    <Indicator v-if="loading" />
    <template v-else>
        <h2>{{ issue.title }} #{{ issue.number }} </h2>
        <p>{{ issue.body }}</p>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api";
import useIssue from '@/composables/issue';
import Indicator from "@/components/Indicator.vue";

export default defineComponent({
    components: {
        Indicator,
    },
    props: {
        id: {
            type: Number,
            required: true,
        }
    },
    setup(props) {
        const { loading, issue, fetchIssueDetail } = useIssue();
        onMounted(() => {
            fetchIssueDetail(props.id);
        });

        return {
            loading,
            issue
        };
    }
});
</script>

<style lang="scss">
.issue-detail-view {
    h2 {
        margin-bottom: 1rem;
    }
}
</style>
