<template>
 <DashLayout />
  <div class="container bg-[#E5E5E5] rounded-lg p-10 h-[80vh]">
    <div class="md:flex mt-10">
      <div class="w-full sm:mb-2 md:w-3/4">
        <label for="package">Package Categories</label><br>
        <select v-model="state.package" class="w-full sm:mb-2 md:w-3/4 px-4 py-3 rounded-lg border-2 bg-white">
          <option value="defi">Defi</option>
        </select>
      </div>
      <div class="w-full sm:mb-2 md:w-3/4">
        <label for="package">Coin Type</label><br>
        <select v-model="state.coin" class="w-full sm:mb-2 md:w-3/4 px-4 py-3 rounded-lg border-2 bg-white">
          <option value="btc">Bitcoin</option>
        </select>
      </div>
    </div>
    <div class="md:flex my-5">
      <div class="md:w-3/4">
        <label for="wallet">Wallet</label><br>
        <input class="md:w-3/4 px-4 py-3 rounded-lg border-2 bg-white" v-model="state.walletAddress" placeholder="Wallet Address" type="text" name="wallet">
      </div>
      <div class="md:w-3/4">
        <label for="amount">Amount</label><br>
        <input class="md:w-3/4 px-4 py-3 rounded-lg border-2 bg-white" v-model="state.amount" placeholder="amount" type="number" name="amount">
      </div>
    </div>
    <!-- <div class="md:flex mt-5">
      <div class="w-[94md:%]">
        <label for="wallet">Wallet</label><br>
        <input class="w-[94%] px-4 py-3 rounded-lg border-2 bg-white" v-model="state.walletAddress" placeholder="Wallet Address" type="text" name="wallet">
      </div>
    </div> -->
    <button class="bg-primary px-9 py-3 rounded-lg text-white">Deposit</button>
  </div>
</template>

<script setup>
import DashLayout from '../components/layouts/DashLayout.vue';

import { reactive } from 'vue'

const state = reactive({
  package: '',
  coin: '',
  network: '',
  walletAddress: '',
  amount: 0
})
const onsubmit = ()  => {
  console.log('Submit')
}
</script>

<style lang="scss" scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 10px;
}
</style>
