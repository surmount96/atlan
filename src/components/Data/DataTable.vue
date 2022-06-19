<template>
  <div class="fixed bottom-0 bg-zinc-800 w-custom p-3 mx-3">
    <div class="" v-if="tables.length > 0">
      <div class="flex justify-between text-md mb-4">
        <p>Results</p>
        <button class="flex items-center" @click="update">
          <i class="ri-save-line mr-2 text-blue-600"></i>
          Export data
        </button>
      </div>
      <div class="h-64 overflow-y-scroll">
        <div class="flex font-semibold text-sm border border-gray rounded">
          <div
            class="flex-1 px-3 py-2 border-r"
            v-for="column in columns"
            :key="column"
          >
            <p>{{ column }}</p>
          </div>
        </div>
        <div
          class="flex text-sm border border-gray rounded mb-4"
          v-for="table in tables"
          :key="table.id"
        >
          <div
            class="flex-1 px-3 py-2 border-r"
            v-for="(row, key) in table"
            :key="row.id"
          >
            <p>{{ table[key] }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>No Data Available.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataTable",
  data() {
    return {};
  },
  computed: {
    tables() {
      return this.$store.state.db.tables;
    },
    columns() {
      return Object.keys(this.tables[0]);
    },
  },
  mounted() {
    // Object.keys(this.columns);
  },
  methods: {
    update() {
      this.$store.commit("UPDATE_COUNT");
    },
  },
};
</script>

<style>
.w-custom {
  width: 82%;
}
</style>
