<template>
  <div>
    <DashLayout />
    <div class="container">

      <p v-if="deposits" class="text-1xl font-bold">Deposit</p>
      <table class="table-auto w-full text-center mb-5">
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
          <tr
            v-for="(tx, index) in deposits"
            :key="tx.id"
            class="py-4 bg-gray-50"
          >
            <td class="p-4">{{ index++ }}</td>
            <td>{{ tx.coin }}</td>
            <td>${{ tx.amount }}</td>
            <td>Deposit</td>
            <td>{{ new Date(tx.transaction_date).toLocaleDateString() }}</td>
            <td>{{ tx.status }}</td>
          </tr>
        </tbody>
      </table>

      <p v-if="withdraws" class="text-1xl font-bold pt-5">Withdraw</p>
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
          <tr
            v-for="(tx, index) in withdraws"
            :key="tx.id"
            class="py-4 bg-gray-50"
          >
            <td class="p-4">{{ index }}</td>
            <td>{{ tx.coin }}</td>
            <td>${{ tx.amount }}</td>
            <td>Withdraw</td>
            <td>{{ new Date(tx.transaction_date).toLocaleDateString() }}</td>
            <td>{{ tx.status }}</td>
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
const deposits = computed(() => store.state.userInfo.depositTx);
const withdraws = computed(() => store.state.userInfo.withdrawTx);
console.log(store.state.userInfo.withdrawTx)
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