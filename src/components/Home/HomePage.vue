<template>
  <div class="relative">
    <div class="p-4 cursor-text">
      <p v-html="colorTheme"></p>
    </div>
    <data-table />
  </div>
</template>

<script>
import DataTable from "../Data/DataTable.vue";
import { observer } from "../../constant";

export default {
  name: "HomePage",
  components: {
    DataTable,
  },
  data() {
    return {
      observer: [],
    };
  },
  computed: {
    colorTheme() {
      const { state } = this.$store;
      if (!state.db.query) return;
      const breakDown = state.db.query.split(" ");
      return breakDown
        .map((item) => {
          if (observer.includes(item)) {
            item = `<span class="text-orange-500">${item}</span>`;
          }
          return item;
        })
        .join(" ");
    },
  },
};
</script>
