<template>
 <DashLayout />
  <div class="container bg-[#fcfcff] rounded-lg p-10 ">
    <DropZone class="drop-area" @files-dropped="addFiles" #default="{ dropZoneActive }">
        <div v-if="dropZoneActive">
            <div>Drop Them</div>
        </div>
        <div v-else>
            <div>Drag Your Files Here</div>
        </div>
    </DropZone>
    <div class="md:flex mt-10">
      <div class="w-full sm:mb-2 md:w-3/4">
        <label for="first-name">First name</label><br>
        <input class="md:w-3/4 px-4 py-3 rounded-lg border-2 bg-white" v-model="state.firstName" placeholder="First name" type="text" name="first-name">
      </div>
      <div class="w-full sm:mb-2 md:w-3/4">
        <label for="last-name">Last name</label><br>
        <input class="md:w-3/4 px-4 py-3 rounded-lg border-2 bg-white" v-model="state.lastName" placeholder="last name" type="text" name="last-name">
      </div>
      
    </div>
    <div class="md:flex my-5">
      <div class="md:w-3/4">
        <label for="email">Email</label><br>
        <input class="md:w-3/4 px-4 py-3 rounded-lg border-2 bg-white" v-model="state.email" placeholder="Enter email" type="email" name="email">
      </div>
      <div class="md:w-3/4">
        <label for="phone">Phone number</label><br>
        <input class="md:w-3/4 px-4 py-3 rounded-lg border-2 bg-white" v-model="state.phone" placeholder="Enter phone" type="number" name="phone">
      </div>
    </div>
    <div class="md:flex my-5">
      <div class="w-full sm:mb-2 md:w-[338px]">
        <label for="package">Occupation</label><br>
        <select v-model="state.occupation" class="w-full sm:mb-2 md:w-3/4 px-4 py-3 rounded-lg border-2 bg-white">
          <option value="Student">Student</option>
          <option value="Employed">Employed</option>
          <option value="Self-Employed">Self-Employed</option>
          <option value="Others">Others</option>
        </select>
      </div>
    </div>
    <button @click="onsubmit" class="bg-primary px-9 py-3 rounded-lg text-white">Save</button>

    <h3 class="mt-8 text-xl font-bold">User Asset</h3>
    <div class="md:flex mt-10">
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
      <div class="w-full sm:mb-2 md:w-3/4 mb-3">
        <label for="wallet-addres">Wallet Address</label><br>
        <input class="md:w-3/4 px-4 py-3 rounded-lg border-2 bg-white" v-model="state.walletAddress" placeholder="Wallet Address" type="text" name="wallet-addres">
      </div>
      
  </div>
    <button @click="userAssets" class="bg-primary px-9 py-3 rounded-lg text-white">Create/Update Asset</button>

    <h3 class="mt-8 text-xl font-bold">Change Password</h3>
    <div class="md:flex mt-10">
      <div class="w-full sm:mb-2 md:w-3/4">
        <label for="current-password">Current password</label><br>
        <input class="md:w-3/4 px-4 py-3 rounded-lg border-2 bg-white" v-model="state.currentPassword" placeholder="Current password" type="text" name="current-password">
      </div>
      <div class="w-full sm:mb-2 md:w-3/4">
        <label for="new-password">New password</label><br>
        <input class="md:w-3/4 px-4 py-3 rounded-lg border-2 bg-white" v-model="state.password" placeholder="Password" type="text" name="new-password">
      </div>
      <div class="w-full mb-2 md:w-3/4">
        <label for="confirm-password">Confirm password</label><br>
        <input class="md:w-3/4 px-4 py-3 rounded-lg border-2 bg-white" v-model="state.re_password" placeholder="Confirm password" type="text" name="confirm-password">
      </div>
      
    </div>
    <button @click="changePassword" class="bg-primary px-9 py-3 rounded-lg text-white">Update password</button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import DashLayout from '../components/layouts/DashLayout.vue';
import DropZone from '../components/DropZone.vue'
import useFileList from '../composable/file'

import { reactive, onMounted, computed } from 'vue'
import { useToast } from 'vue-toastification'

const store = useStore()
const toast = useToast()

const user = store.state.user
const asset = store.state.asset

const coinList = computed(() => store.state.coins)

const { files, addFiles, removeFile } = useFileList()

const state = reactive({
  errorMsg: '',
  successMsg: '',
  firstName: '',
  lastName: '',
  occupation: '',
  phone: 0,
  sex: '',
  email: '',
  currentPassword: '',
  password: '',
  re_password: '',
  coin: '',
  walletAddress: ''
})


onMounted(() => {
  state.firstName = user.firstname
  state.lastName = user.lastname
  state.email = user.email
  state.phone = user.phone
  state.sex = user.sex
  state.occupation = user.occupation
  if(asset) {
    state.coin = asset.coin
    state.walletAddress = asset.wallet_address
  }
})


const onsubmit = (e) => {
  state.errorMsg = ''
  if(!state.email || !state.firstName || !state.lastName || !state.phone || !state.occupation || !state.sex) {
    state.errorMsg = 'Add Inputs'
    toast.error(state.errorMsg)
    return
  }
  if (!validEmail(state.email)) {
    state.errorMsg = 'Add a valid email'
    toast.error(state.errorMsg)
    return state.errorMsg
  }
  const data = {
    firstname: state.firstName,
    lastname: state.lastName,
    occupation: state.occupation,
    phone: state.phone,
    sex: state.sex,
    email: state.email
  }

  store.dispatch('userInfo/updateUserInfo', data)
}

const changePassword = () => {
  console.log('Fired')
  if(!state.currentPassword) {
    toast.error('Add current password')
    return
  }
  if(!state.password || !state.re_password) {
    toast.error('Add password Inputs')
    return
  }
  if(state.re_password !== state.password ) {
    toast.error(`Passwords don't match`)
    return
  }
  
  const data = {
    current_password: state.currentPassword,
    new_password: state.password,
    re_new_password: state.re_password
  }

  store.dispatch('userInfo/updatePassword', data)
}

const userAssets = () => {
  if(!state.coin || !state.walletAddress) {
    toast.error('Fill assets')
    return
  }

  const data = {
    coin: state.coin,
    wallet_address: state.walletAddress
  }

  store.dispatch('userInfo/updateAsset', data)
}

const validEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
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
