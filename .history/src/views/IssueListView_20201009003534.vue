<template>
  <div class="issue-list-view">
    <Indicator v-if="loading" />
    <template v-else>
      <IssueList :data="issues">
        <template v-slot:list-item="{ item }">
          <IssueListItem :item="item" :onItemClick="onItemClick" />
        </template>
      </IssueList>
      <Pagenation :prefixUrl="/issues?page=" :pagenation="pagenation" />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api";
import useIssueList from "@/composables/issueList";
import IssueList from "@/components/IssueList.vue";
import Indicator from "@/components/Indicator.vue";
import IssueListItem from "@/components/IssueListItem.vue";
import Pagenation from "@/components/Pagenation.vue";

export default defineComponent({
  components: {
    Indicator,
    IssueList,
    IssueListItem,
    Pagenation,
  },
  setup(_, { root }) {
    const { loading, issues, fetchIssueList, pagenation } = useIssueList();

    onMounted(() => {
      fetchIssueList();
    });

    const onItemClick = (item: Github.Issue): void => {
      root.$router.push("/issues/" + item.number.toString());
    };

    return {
      loading,
      issues,
      onItemClick,
      pagenation,
    };
  },
});
</script>
