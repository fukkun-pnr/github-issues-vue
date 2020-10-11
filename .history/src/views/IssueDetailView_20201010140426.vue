<template>
  <div class="issue-detail-view">
    <Indicator v-if="loading" />
    <template v-else>
      <h2>{{ issue.title }} #{{ issue.number }}</h2>
      <p>{{ issue.body }}</p>
      <button @click="onBack">戻る</button>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api";
import useIssueDetail from "@/composables/issueDetail";
import Indicator from "@/components/Indicator.vue";

export default defineComponent({
  components: {
    Indicator,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props, { root }) {
    const { loading, issue, fetchIssueDetail } = useIssueDetail();
    onMounted(() => {
      fetchIssueDetail(props.id);
    });

    const onBack = () => {
      root.$router.back();
    };

    return {
      loading,
      issue,
      onBack,
    };
  },
});
</script>

<style lang="scss">
.issue-detail-view {
  h2 {
    margin-bottom: 1rem;
  }
}
</style>
