<template>
  <div>
    <DashLayoutVue />
    <div class="container">
      <div class="md:flex justify-between mt-5">
        <div class="rounded-lg bg-[#DDF6F8] w-[310px] h-[150px] text-center">
          <h4 class="text-xl mt-8">Wallet balance</h4>
          <h3 class="text-2xl mt-3">₦ 4,509,063</h3>
        </div>
        <div class="rounded-lg bg-[#FEEED7] w-[310px] h-[150px] text-center">
          <h4 class="text-xl mt-8">Amount Spent</h4>
          <h3 class="text-2xl mt-3">₦ 4,509,063</h3>
        </div>
        <div class="rounded-lg bg-[#E5E2FF] w-[310px] h-[150px] text-center">
          <h4 class="text-xl mt-8">Amount Invested</h4>
          <h3 class="text-2xl mt-3">₦ 4,509,063</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DashLayoutVue from '../components/layouts/DashLayout.vue';
</script>

<style lang="scss" scoped>

</style>