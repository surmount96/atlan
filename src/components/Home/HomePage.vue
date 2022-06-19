<template>
  <div class="relative">
    <p v-html="colorTheme"></p>
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
      observer: ["select", "*", "from", "where"],
    };
  },
  computed: {
    colorTheme() {
      const str = "select * from table where name = 'girl';";
      const breakDown = str.split(" ");
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
