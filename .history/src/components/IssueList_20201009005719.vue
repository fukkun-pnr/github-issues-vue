<template>
  <ul class="issue-list">
    <li v-for="item in data" :key="item.node_id">
      <slot name="list-item" :item="item" />
      a
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<Github.Issues>,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.issue-list {
  border-top: 1px solid #ccc;
  li {
    border-bottom: 1px solid #ccc;
    padding: 0.5rem 1rem;
  }
}
</style>
