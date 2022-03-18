<template>
  <div>
    <DashLayout />
    <div class="container">
  <table class="table-fixed hover:table-fixed mt-16">
  <thead>
    <tr>
      <th class="w-40 text-center">S/N</th>
      <th class="w-40 text-center">Coin</th>
      <th class="w-40 text-center">Account</th>
      <th class="w-40 text-center">Transaction Type</th>
      <th class="w-40 text-center">Date</th>
      <th class="w-40 text-center">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr class="my-4">
      <td class="w-40 text-center">1</td>
      <td class="w-40 text-center">Bitcoin</td>
      <td class="w-40 text-center">$100000.00</td>
      <td class="w-40 text-center">Deposit</td>
      <td class="w-40 text-center">12/03/2022</td>
      <td class="w-40 text-center">Pending</td>
    </tr>
    <tr class="my-4">
      <td class="w-40 text-center">2</td>
      <td class="w-40 text-center">USDT</td>
      <td class="w-40 text-center">$100000.00</td>
      <td class="w-40 text-center">Deposit</td>
      <td class="w-40 text-center">12/03/2022</td>
      <td class="w-40 text-center">Pending</td>
    </tr>
    <tr class="my-4">
      <td class="w-40 text-center">3</td>
      <td class="w-40 text-center">Ethereum</td>
      <td class="w-40 text-center">$100786000.00</td>
      <td class="w-40 text-center">Deposit</td>
      <td class="w-40 text-center">12/03/2022</td>
      <td class="w-40 text-center">Pending</td>
    </tr>
  </tbody>
</table>
    </div>
  </div>
</template>

<script setup>
import DashLayout from '../components/layouts/DashLayout.vue';
</script>

<style lang="scss" scoped>

</style>