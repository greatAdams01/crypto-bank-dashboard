<template>
  <div class="container">
    <h2 class="page-title">{{ $route.name }}</h2>
    <div class="deposit">
      <div class="row">
        <div class="col-12 col-md-6 deposit-item">
          <form @submit.prevent="onsubmit">
            <div class="form-item">
              <label for="network">Network</label>
              <select v-model="state.network" name="network">
                <option value="bitcoin">Bitcoin</option>
                <option value="eth">Ethereum</option>
                <option value="sol">Solana</option>
                <option value="trx">Tron</option>
              </select>
            </div>
            <div class="form-item">
              <label for="wallet-address">Wallet address</label>
              <input v-model="state.walletAddress" type="text" name="wallet-address">
            </div>
            <div class="form-item">
              <label for="amount">Amount</label>
              <input v-model="state.amount" type="number" name="amount">
            </div>

            <div class="form-sub">
              <input type="submit" class="btn" value="Deposit">
            </div>
          </form>
        </div>
        <div class="col-12 col-md-6 deposit-item">
          <div class="content">
            <img src="/img/undraw_vault_re_s4my.svg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const state = reactive({
  network: '',
  walletAddress: '',
  amount: 0
})
const onsubmit = ()  => {
  console.log('Submit')
}
</script>

<style lang="scss" scoped>

</style>
