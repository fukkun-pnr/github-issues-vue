<template>
  <div class="pagenation">
    <ul>
      <li>
        <router-link
          v-if="pagenation.isPrev"
          :to="{ name: pageName, query: { page: pagenation.current - 1 } }"
        >
          &lt; Prev
        </router-link>
        <span v-else>&lt; Prev</span>
      </li>
      <li
        v-for="page in pagenation.start"
        :key="page"
        :class="page === pagenation.current && 'active'"
      >
        <router-link :to="{ name: pageName, query: { page: page } }">
          {{ page }}
        </router-link>
      </li>
      <li v-show="pagenation.isStartDot" class="dot">...</li>
      <li
        v-for="page in pagenation.center"
        :key="page"
        :class="page === pagenation.current && 'active'"
      >
        <router-link :to="{ name: pageName, query: { page: page } }">
          {{ page }}
        </router-link>
      </li>
      <li v-show="pagenation.isEndDot" class="dot">...</li>
      <li
        v-for="page in pagenation.end"
        :key="page"
        :class="page === pagenation.current && 'active'"
      >
        <router-link :to="{ name: pageName, query: { page: page } }">
          {{ page }}
        </router-link>
      </li>
      <li>
        <router-link
          v-if="pagenation.isNext"
          :to="{ name: pageName, query: { page: pagenation.current + 1 } }"
        >
          Next &gt;
        </router-link>
        <span v-else>Next &gt; </span>
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

      &.active {
        background-color: #42b983;
        a {
          color: #fff;
        }
      }

      &.dot {
        padding: 0.5rem 0;
      }
    }
  }
}
</style>