<template>
  <div class="flex items-center">
    <div class="flex items-center w-60">
      <i class="ri-lock-line mr-2"></i>
      SQL EDITOR
    </div>
    <select
      name=""
      id=""
      class="bg-zinc-800 px-2 py-2 w-1/4 text-sm focus:outline-none rounded"
      v-model="query_str"
      @change="updateQuery"
    >
      <option value="">Select a query</option>
      <option v-for="table in tables" :key="table.id" :value="table">
        {{ table.query }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AppNav",
  data() {
    return {
      query_str: "",
    };
  },
  computed: {
    tables() {
      return this.$store.state.db.columns;
    },
  },
  methods: {
    ...mapActions(["executeQueries"]),
    updateQuery() {
      this.$store.commit("SET_QUERY", this.query_str.query);
      this.executeQueries(this.query_str.key);
    },
  },
};
</script>
