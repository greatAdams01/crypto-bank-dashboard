<template>
  <DashLayout />
  <div class="container bg-[#E5E5E5] rounded-lg md:p-10">
    <div>
      <p class="text-center p-10">Lorem aute incididunt cupidatat est dolor consequat sit. Nulla est ea minim veniam nisi.<br> Esse incididunt sit ea duis sint ipsum Lorem id ea do enim ea.</p>
    </div>
    <div class=" md:flex md:justify-between mt-5">
        <div class="rounded-lg bg-white w-[280px] h-[350px] text-center m-auto">
          <h4 class="text-xl font-bold pt-16 text-primary">Basic</h4>
          <h3 class="text-sm pt-3">Maximum Deposit 4990USD</h3>
          <h3 class="text-sm pt-3">Minimum Deposit 500USD</h3>
          <h3 class="text-sm pt-3">ROI Action 50 TIMES</h3>
          <h3 class="text-sm pt-3">30% Payback Weekly</h3>
          <button class="w-[230px] h-[50px] rounded-lg bg-primary text-white mt-5">Purchase</button>
        </div>
        <div class="rounded-lg bg-white w-[280px] h-[350px] text-center m-auto">
          <h4 class="text-xl font-bold pt-16 text-primary">Standard</h4>
          <h3 class="text-sm pt-3">Maximum Deposit 4990USD</h3>
          <h3 class="text-sm pt-3">Minimum Deposit 500USD</h3>
          <h3 class="text-sm pt-3">ROI Action 50 TIMES</h3>
          <h3 class="text-sm pt-3">30% Payback Weekly</h3>
          <button class="w-[230px] h-[50px] rounded-lg bg-primary text-white mt-5">Purchase</button>
        </div>
        <div class="rounded-lg bg-white w-[280px] h-[350px] text-center m-auto">
          <h4 class="text-xl font-bold pt-16 text-primary">Gold</h4>
          <h3 class="text-sm pt-3">Maximum Deposit 4990USD</h3>
          <h3 class="text-sm pt-3">Minimum Deposit 500USD</h3>
          <h3 class="text-sm pt-3">ROI Action 50 TIMES</h3>
          <h3 class="text-sm pt-3">30% Payback Weekly</h3>
          <button class="w-[230px] h-[50px] rounded-lg bg-primary text-white mt-5">Purchase</button>
        </div>
      </div>
  </div>
</template>

<script setup>
import DashLayout from '../components/layouts/DashLayout.vue';
</script>

<style lang="scss" scoped>

</style>