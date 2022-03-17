<template>
  <div class="nav">
    <div class="fixed top-0 left-0 h-screen w-48 flex flex-col bg-theme-dark shadow-lg">
      <div class="logo my-11"></div>
      <div
        v-for="route in routes"
        :key="route.url"
      >
        <router-link :to="route.url" class="sidebar-icons">
          <img class="w-10 pr-4" :src=route.img alt="">
          {{ route.title }}
        </router-link>
      </div>
      <div class="">
        <a class="logout">Log out</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import routes from '../../data/nav'

</script>

<style lang="scss" scoped>
// background: #212936;
</style>