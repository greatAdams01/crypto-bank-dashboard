<template>
  <div class="nav">
    <div class="fixed top-0 left-0 h-screen w-48 flex flex-col bg-theme-dark">
      <div class="logo my-11"></div>
      <div>
        <router-link to="/" class="sidebar-icons">
          <svg-icon class="pr-4" type="mdi" :path="mdiViewDashboard" :size="40"></svg-icon>
          Dashboard
        </router-link>
        <router-link to="/" class="sidebar-icons">
          <svg-icon class="pl-4" :fa-icon="faMoneyBill" :size="40" flip="horizontal"></svg-icon>
          Transactions
        </router-link>
        <router-link to="/deposit" class="sidebar-icons">
          <svg-icon class="pl-4" :fa-icon="faSackDollar" :size="40" flip="horizontal"></svg-icon>
          Deposit
        </router-link>
        <router-link to="/withdrawal" class="sidebar-icons">
          <svg-icon class="pl-4" :fa-icon="faMoneyBillTransfer" :size="40" flip="horizontal"></svg-icon>
          Withdraw
        </router-link>
        <router-link to="/" class="sidebar-icons">
          <svg-icon class="pr-4" type="mdi" :path="mdiInvertColors " :size="40"></svg-icon>
          Investment
        </router-link>
        <router-link to="/" class="sidebar-icons">
          <svg-icon class="pl-4" :fa-icon="faChartSimple" :size="40" flip="horizontal"></svg-icon>
          Chart
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
import { faSackDollar, faChartSimple, faMoneyBill, faMoneyBillTransfer} from "@fortawesome/free-solid-svg-icons";
import { mdiViewDashboard, mdiInvertColors } from '@mdi/js';
</script>

<style lang="scss" scoped>
// background: #212936;
</style>