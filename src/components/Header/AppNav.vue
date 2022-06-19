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
    >
      <option value="2">Select a query</option>
      <option value="2">Select * from table;</option>
    </select>
    <i
      class="ri-flashlight-line cursor-pointer ml-4"
      title="Execute the statement under the keyboard cursor"
    ></i>
  </div>
</template>

<script>
export default {
  name: "AppNav",
};
</script>
