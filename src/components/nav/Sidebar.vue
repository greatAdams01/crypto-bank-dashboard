<template>
  <div class="nav">
    <div
      v-if="state.isOpened"
      class="slide-sidebar-x"
      @click="state.isOpened ? state.isOpened = false : state.isOpened = true"
    >
      <svg-icon class="pl-4 text-primary" :fa-icon="faXmark" :size="32" flip="horizontal"></svg-icon>
    </div>
    <div
      v-else
      :class="[state.isOpened ? 'slide-sidebar' : 'slide-sidebar-close']"
      @click="state.isOpened ? state.isOpened = false : state.isOpened = true"
    >
      <svg-icon class="pl-4 text-primary" :fa-icon="faBarsStaggered" :size="35" flip="horizontal"></svg-icon>
    </div>
    <div
      v-if="state.isOpened"
      class="fixed z-20 top-0 left-0 h-screen w-[13rem] flex-col bg-theme-dark transition-all"
    >
      <div class="logo my-11">
        <img class="w-[130px] m-auto" src="/img/logo.png" >
      </div>
      <div @click="state.isMobileView ? state.isOpened = false : state.isOpened = true">
        <router-link to="/" class="sidebar-icons">
          <svg-icon class="pr-4" type="mdi" :path="mdiViewDashboard" :size="40"></svg-icon>
          Dashboard
        </router-link>
        <router-link to="/transactions" class="sidebar-icons">
          <svg-icon class="pl-4" :fa-icon="faMoneyBill" :size="40" flip="horizontal"></svg-icon>
          Transactions
        </router-link>
        <router-link to="/deposit" class="sidebar-icons">
          <svg-icon class="pl-4" :fa-icon="faSackDollar" :size="40" flip="horizontal"></svg-icon>
          Deposit
        </router-link>
        <router-link to="/withdraw" class="sidebar-icons">
          <svg-icon class="pl-4" :fa-icon="faMoneyBillTransfer" :size="40" flip="horizontal"></svg-icon>
          Withdraw
        </router-link>
        <router-link to="/investment" class="sidebar-icons">
          <svg-icon class="pr-4" type="mdi" :path="mdiInvertColors " :size="40"></svg-icon>
          Investment
        </router-link>
        <router-link to="/data-feed" class="sidebar-icons">
          <svg-icon class="pl-4" :fa-icon="faChartSimple" :size="40" flip="horizontal"></svg-icon>
          Chart
        </router-link>
      </div>
      <div class="">
        <a
          @click="logUserOut(store)"
          class="logout"
        >
          <svg-icon class="pl-4" :fa-icon="faArrowRightFromBracket" :size="40" flip="horizontal"></svg-icon>
          Log out
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useStore } from 'vuex'
import logUserOut from '../../composable/logout'
import { 
  faSackDollar,
  faChartSimple,
  faMoneyBill,
  faMoneyBillTransfer,
  faArrowRightFromBracket,
  faXmark,
  faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { mdiViewDashboard, mdiInvertColors } from '@mdi/js';

const state = reactive({
  isOpened: false,
  isMobileView: false,
  x: ''
})

const store = useStore()

const checkMedia = (x) => {
  if (x.matches) { // If media query matches
    state.isMobileView = false
    state.isOpened = true
  } else {
    state.isMobileView = true
  }
}

state.x = window.matchMedia("(min-width: 1000px)")

onMounted(() => {
  checkMedia(state.x) // Call listener function at run time

})

</script>

<style lang="scss" scoped>
// background: #212936;
</style>