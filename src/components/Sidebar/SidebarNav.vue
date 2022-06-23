<template>
  <div class="py-3">
    <p class="text-sm px-6 my-3">SCHEMAS</p>
    <div
      class="flex items-center px-4 py-2 text-sm cursor-pointer"
      v-for="table in tables"
      :key="table.id"
      @click="runQuery(table)"
    >
      <i class="ri-arrow-drop-right-line"></i>
      <i class="ri-database-2-line mx-1"></i>
      {{ table.key }}
    </div>
    <sidebar-footer />
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import SidebarFooter from "./SidebarFooter.vue";
export default {
  components: { SidebarFooter },
  name: "SidebarNav",
  data() {
    return {
      // tables: [],
    };
  },
  mounted() {
    this.LOADING(true);
    this.fetchTables();
    this.LOADING(false);
  },
  computed: {
    tables() {
      return this.$store.state.db.columns.filter((table) => {
        if (!table.state) return table;
      });
    },
  },
  methods: {
    ...mapMutations(["LOADING", "SET_QUERY"]),
    ...mapActions(["fetchTables", "executeQueries"]),
    runQuery(table) {
      this.SET_QUERY(table.query);
      this.executeQueries(table.key);
    },
  },
};
</script>
