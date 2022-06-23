<template>
  <div class="fixed bottom-0 bg-zinc-800 w-custom p-3 mx-3">
    <div class="" v-if="tables.length > 0">
      <div class="flex justify-between text-md mb-4">
        <p>Results</p>
        <export-excel :data="tables">
          <button class="flex items-center">
            <i class="ri-save-line mr-2 text-blue-600"></i>
            Export data
          </button>
        </export-excel>
      </div>
      <div class="h-64 overflow-y-scroll">
        <table class="table-auto w-full" v-memo="[columns, tables]">
          <thead>
            <tr>
              <th
                class="font-light text-left py-2 px-6 border border-gray"
                v-for="column in columns"
                :key="column"
              >
                {{ column }}
              </th>
            </tr>
          </thead>
          <tbody v-for="table in tables" :key="table.id">
            <tr>
              <td
                class="py-2 px-6 border border-gray"
                v-for="(row, key) in table"
                :key="row.id"
              >
                <span>{{ table[key] }}</span>
              </td>
            </tr>
          </tbody>
        </table>
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
