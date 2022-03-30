<template>
 <DashLayout />
  <div class="container bg-[#fcfcff] rounded-lg p-10">
    <div class="md:flex mt-10">
      <div class="w-full sm:mb-2 md:w-3/4">
        <label for="package">Package Categories</label><br>
        <select v-model="state.package" class="w-full sm:mb-2 md:w-3/4 px-4 py-3 rounded-lg border-2 bg-white">
          <option
            v-for="pack in packagesList"
            :key="pack.id"
            :value="pack.id"
          >{{ pack.name }}</option>
        </select>
      </div>
      <div class="w-full sm:mb-2 md:w-3/4">
        <label for="package">Coin Type</label><br>
        <select v-model="state.coin" class="w-full sm:mb-2 md:w-3/4 px-4 py-3 rounded-lg border-2 bg-white">
          <option
            v-for="coin in coinList"
            :key="coin.id"
            :value="coin.id"
          >{{ coin.coin_type }}</option>
        </select>
      </div>
    </div>
    <div class="md:flex my-5">
      <div class="md:w-3/4">
        <label for="wallet">Wallet</label><br>
        <input disabled class="md:w-3/4 px-4 py-3 rounded-lg border-2 bg-white" v-model="state.walletAddress" placeholder="Wallet Address" type="text" name="wallet">
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
    <button @click="onsubmit" class="bg-primary px-9 py-3 rounded-lg text-white">Deposit</button>
  </div>
</template>

<script setup>
import { reactive, computed, onMounted } from 'vue'
import  { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import  { useToast } from 'vue-toastification'
import DashLayout from '../components/layouts/DashLayout.vue';

const store = useStore()
const router = useRouter()
const toast = useToast()

const state = reactive({
  package: '',
  coin: '',
  network: '',
  walletAddress: '',
  amount: 0
})

const packagesList = computed(() => store.state.packages)
const coinList = computed(() => store.state.coins)
const userAsset = computed(() => store.state.asset)
state.walletAddress = store.state.asset.wallet_address

// if(!store.state.asset.wallet_address) {
//   toast.info('Create Assets')
//   router.push('/profile')
// }

onMounted(() => {
  store.dispatch('invest/getPackages')
})


const onsubmit = ()  => {
  if(!state.package || !state.coin || !state.walletAddress || !state.amount) {
    toast.error('Added inputs')
    return
  }
  const proof = ''
  const data = {
    package: state.package,
    coin : state.coin,
    company_wallet_address: store.state.asset.coin,
    amount: state.amount,
    proof: proof
  }
  store.dispatch('userInfo/depositAssets', data)
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
  background-color: white;
}
</style>
