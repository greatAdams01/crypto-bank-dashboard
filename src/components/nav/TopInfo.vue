<template>
  <div class="container flex justify-between bg-white h-20">
    <div class="text-theme-dark mt-5">
      <h2 class="text-3xl font-bold">{{ $route.name }}</h2>
      <p v-if="$route.name === 'Dashboard'">Realtime Insight on various activities</p>
    </div>
    <div class="flex mt-5">
      <AppInput
        class="search flex"
        placeholder="search"
        v-model="state.search"
        type="text"
      >
        <svg-icon class="absolute pr-3 pt-3" :fa-icon="faSearch" :size="25" flip="horizontal"></svg-icon>
      </AppInput>
      <div class="rounded-full shadow-lg w-11 h-11 ml-2">
        <svg-icon class="mt-2 pr-3" :fa-icon="faBell" :size="30" flip="horizontal"></svg-icon>
      </div>
      <div class="flex ml-4">
        <img class="w-10 h-10 rounded-sm" src="/img/wp5293460.jpg" alt="">
        <div class="ml-3">
          <h4 class="text-1xl font-bold">Great</h4>
          <div class="flex">
            <span>Customer</span>
            <svg-icon class="pr-2" :fa-icon="faCaretDown" :size="20" flip="horizontal"></svg-icon>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { reactive } from 'vue';
import AppInput from '../AppInput.vue';
import { faBell, faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";

const state = reactive({
  search: ''
})
</script>

<style lang="scss">

</style>