<template>
  <div class="pagenation">
    <ul>
      <li
        v-for="page in pagenation.start"
        :key="page"
        :class="page === pagenation.current && 'active'"
      >
        <router-link :to="{ name: pageName, query: { page: page } }">
          {{ page }}
        </router-link>
      </li>
      <li v-for="page in pagenation.center" :key="page">
        <router-link :to="{ name: pageName, query: { page: page } }">
          {{ page }}
        </router-link>
      </li>
      <li v-for="page in pagenation.end" :key="page">
        <router-link :to="{ name: pageName, query: { page: page } }">
          {{ page }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { PagenationData } from "@/composables/pagenation";
import { defineComponent, PropType } from "@vue/composition-api";

export default defineComponent({
  props: {
    pageName: {
      type: String,
      required: true,
    },
    pagenation: {
      type: Object as PropType<PagenationData>,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.pagenation {
  margin-top: 1.5rem;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;

    li {
      padding: 0.5rem 1rem;
      text-align: center;
    }
  }
}
</style>