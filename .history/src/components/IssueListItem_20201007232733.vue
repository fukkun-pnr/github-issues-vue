<template>
  <div class="issue-list-item">
    <h4>
      <a href="#" @click.stop.prevent="onClick">{{ item.title }}</a>
    </h4>
    <p>#{{ item.number }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<Github.Issue>,
      required: true,
    },
    onItemClick: {
      type: Function as PropType<(item: Github.Issue) => void>,
      required: true,
    },
  },
  setup(props) {
    return {
      onClick: () => {
        props.onItemClick(props.item);
      },
    };
  },
});
</script>

<style lang="scss">
.issue-list-item {
  h4 {
    font-weight: bold;
    margin-bottom: 0.4rem;
  }
}
</style>