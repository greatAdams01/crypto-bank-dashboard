<template>
  <div class="container flex flex-col md:flex-row justify-between bg-white md:h-20 ">
    <div class="order-last md:order-none text-theme-dark mt-5">
      <h2 class="text-3xl font-bold">{{ $route.name }}</h2>
      <p v-if="$route.name === 'Dashboard'">Realtime Insight on various activities</p>
    </div>
    <div class="flex md:flex mt-5 w-[300px]">
      <AppInput
        class="search flex"
        placeholder="search"
        v-model="state.search"
        type="text"
      >
        <svg-icon class="absolute pr-3 pt-3" :fa-icon="faSearch" :size="25" flip="horizontal"></svg-icon>
      </AppInput>
      <div class="rounded-full shadow-lg h-[48px]  p-[15px] ml-2">
        <svg-icon class="text-center" :fa-icon="faBell" :size="20" flip="horizontal"></svg-icon>
      </div>
      <div class="flex ml-4 cursor-pointer group">
        <img class="w-10 h-10 rounded-full" src="/img/wp5293460.jpg" alt="">
        <svg-icon class="pr-2 pt-1" :fa-icon="faCaretDown" :size="35" flip="horizontal"></svg-icon>
        <div class="hidden group-hover:block absolute top-14 bg-white w-15 rounded-2xl border-2 border-primary p-5 transition-all duration-300 ease-linear">
          <router-link class="block border-b-2 border-primary" to="/profile">Profile</router-link>
          <a class="block" >Log out</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import AppInput from '../AppInput.vue';
import { faBell, faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";

const state = reactive({
  search: ''
})

const store = useStore()
</script>

<style lang="scss">

</style>