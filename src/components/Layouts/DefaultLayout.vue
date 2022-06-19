<template>
  <div class="h-screen">
    <nav class="bg-zinc-700 text-white px-4 py-2 border-y border-gray-500">
      <slot name="nav"></slot>
    </nav>
    <main class="flex flex-wrap h-90">
      <div class="lg:w-2/12 md:w-3/12 bg-zinc-800 text-white w-full">
        <slot name="sidebar"></slot>
      </div>
      <div
        class="lg:w-10/12 md:w-9/12 w-full bg-zinc-900 text-white p-4 text-sm"
      >
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>

<style>
.h-90 {
  height: 93.7vh;
}
</style>
