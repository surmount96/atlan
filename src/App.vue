<template>
  <default-layout>
    <template v-slot:nav> <app-nav /> </template>
    <template v-slot:sidebar> <sidebar-nav /> </template>
    <home-page />
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SidebarNav from "@/components/Sidebar/SidebarNav.vue";
import AppNav from "@/components/Header/AppNav.vue";
import HomePage from "@/components/Home/HomePage.vue";

export default {
  name: "App",
  components: {
    DefaultLayout,
    SidebarNav,
    AppNav,
    HomePage,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap");
body {
  font-family: "Poppins", sans-serif;
}
</style>
