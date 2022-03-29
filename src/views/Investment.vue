<template>
  <DashLayout />
  <div class="container bg-[#fcfcff] rounded-lg md:p-10">
    <div>
      <p class="text-center p-10">Lorem aute incididunt cupidatat est dolor consequat sit. Nulla est ea minim veniam nisi.<br> Esse incididunt sit ea duis sint ipsum Lorem id ea do enim ea.</p>
    </div>
    <div class=" md:flex flex-wrap md:justify-between mt-5">
        <div
          v-for="packageItem in packages"
          :key="packageItem.id"
          class="rounded-lg bg-white w-[280px] h-[350px] text-center mt-4 mx-auto shadow-lg"
        >
          <h4 class="text-xl font-bold pt-16 text-primary">{{ packageItem.name }}</h4>
          <h3 class="text-sm pt-3">Maximum Deposit {{ packageItem.maximum_stake }}USD</h3>
          <h3 class="text-sm pt-3">Minimum Deposit {{ packageItem.minimum_stake }}USD</h3>
          <h3 class="text-sm pt-3">ROI Action {{ packageItem.roi }} TIMES</h3>
          <h3 class="text-sm pt-3">{{ packageItem.duration }}</h3>
          <button @click="state.openInput = true; state.packageId = packageItem.id" class="w-[230px] h-[50px] rounded-lg bg-primary text-white mt-5">Purchase</button>
        </div>
      </div>
      <div v-if="state.openInput" class="w-42 m-auto">
        <div class="flex my-5 justify-center">
      <div class="">
        <label for="amount">Amount</label><br />
        <input class="w-36 px-3 h-12 rounded-lg border-2 bg-white" v-model="state.amount" placeholder="Enter amount" type="text" name="amount">
      </div>
      <button @click="purchase(state.packageId)" class="bg-primary px-2 mt-5 mx-4 rounded-lg h-12 text-white">Invest</button>
    </div>
      </div>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'
import  { useToast } from 'vue-toastification'
import DashLayout from '../components/layouts/DashLayout.vue';

const store = useStore()
const state = reactive({
  openInput: false,
  amount: 0,
  packageId: 0,
})
const toast = useToast()
const packages = computed(() => store.state.packages)

const purchase = (id) => {
  if(!state.amount) {
    toast.error('Add amount')
    return
  }
  const data = {
    package: id,
    amount: state.amount
  }

  store.dispatch('invest/purchasePackage', data)
}
</script>

<style lang="scss" scoped>

</style>