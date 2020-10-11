<template>
  <div class="issue-list-view">
    <Indicator v-if="loading" />
    <IssueList v-else :data="issues">
        <template v-slot:list-item="{item}">
            <IssueListItem :item="item" :onItemClick="onItemClick" />
        </template>
    </IssueList>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api";
import useIssueList from '@/composables/issueList';
import IssueList from "@/components/IssueList.vue";
import Indicator from "@/components/Indicator.vue";
import IssueListItem from "@/components/IssueListItem.vue";

export default defineComponent({
    components: {
        Indicator,
        IssueList,
        IssueListItem
    },
    setup(_, { root }) {
        const { loading, issues, fetchIssues } = useIssueList();

        onMounted(() => {
            fetchIssues();
        });

        const onItemClick = (item: Github.Issue): void => {
            root.$router.push("/issues/" + item.number.toString());
        };

        return {
            loading,
            issues,
            onItemClick,
        };
    }
});
</script>
