<template>
  <div>
    <DashLayout />
    <div class="container">
      <table class="table-auto w-full text-center">
        <thead>
          <tr class="text-gray-400">
            <th class="py-4 text-primary">S/N</th>
            <th>Coin</th>
            <th>Account</th>
            <th>Transaction Type</th>
            <th>Data</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr class="py-4 bg-gray-50">
            <td class="p-4">1</td>
            <td>Bitcoin</td>
            <td>$198989</td>
            <td>Deposit</td>
            <td>12/22/334</td>
            <td>Pending</td>
          </tr>
          <tr class="py-4 ">
            <td class="p-4">2</td>
            <td>Bitcoin</td>
            <td>$198989</td>
            <td>Deposit</td>
            <td>12/22/334</td>
            <td>Pending</td>
          </tr>
          <tr class="py-4 bg-gray-50">
            <td class="p-4">3</td>
            <td>Bitcoin</td>
            <td>$198989</td>
            <td>Deposit</td>
            <td>12/22/334</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted} from "vue";
import { useStore } from "vuex";
import DashLayout from "../components/layouts/DashLayout.vue";

const store = useStore();
const tx_s = computed(() => store.state.transactions);
// onMounted(() => {
//   fetch("http://vicsites.herokuapp.com/transactions/deposit/history/")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })
// })
</script>

<style lang="scss" scoped>
</style>