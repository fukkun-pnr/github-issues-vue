<template>
  <div class="issue-list-view">
    <Indicator v-if="loading" />
    <template v-else>
      <IssueList :data="issues">
        <template v-slot:listItem="{ item }">
          <IssueListItem :item="item" :onItemClick="onItemClick" />
        </template>
      </IssueList>
      <Pagenation pageName="issueList" :pagenation="pagenation" />
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
  beforeRouteUpdate(to, from, next) {
    const page = to?.query.page ?? 1;
    this.fetchIssueList(page ? Number(page) : 1);
    next();
  },
  setup(_, { root }) {
    const { loading, issues, fetchIssueList, pagenation } = useIssueList();

    onMounted(() => {
      const page = root.$route?.query.page ?? 1;
      fetchIssueList(page ? Number(page) : 1);
    });

    const onItemClick = (item: Github.Issue): void => {
      root.$router.push("/issues/" + item.number.toString());
    };

    return {
      loading,
      issues,
      onItemClick,
      pagenation,
      fetchIssueList,
    };
  },
});
</script>
