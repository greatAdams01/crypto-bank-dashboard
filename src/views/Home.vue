<template>
  <div>
    <DashLayoutVue />
    <div class="container">
      <div class="md:flex justify-between mt-5">
        <div class="rounded-lg bg-[#DDF6F8] w-[310px] h-[150px] text-center mt-4">
          <h4 class="text-xl pt-8">Wallet balance</h4>
          <h3 class="text-2xl pt-3">₦ {{ balance }}</h3>
        </div>
        <div class="rounded-lg bg-[#FEEED7] w-[310px] h-[150px] text-center mt-4">
          <h4 class="text-xl pt-8">Amount Spent</h4>
          <h3 class="text-2xl pt-3">₦ 4,509,063</h3>
        </div>
        <div class="rounded-lg bg-[#E5E2FF] w-[310px] h-[150px] text-center mt-4">
          <h4 class="text-xl pt-8">Amount Invested</h4>
          <h3 class="text-2xl pt-3">₦ 4,509,063</h3>
        </div>
      </div>
      <ChartsVue />
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import DashLayoutVue from '../components/layouts/DashLayout.vue'
import ChartsVue from '../components/Charts.vue';

const store = useStore()
onMounted(() => {
  store.dispatch('userInfo/getAccountDetails')
})

const balance = computed(() => store.state.accountBalance)
</script>

<style lang="scss" scoped>

</style>