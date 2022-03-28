<template>
  <div class="sign-up">
    <div class="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl m-auto">
      <div class="top-bar">
      <div class="flex justify-between mt-10">
        <div class="text-xl font-bold">
          <h5>Avalogs</h5>
        </div>
        <div class="text-xl font-bold text-red-500 cursor-pointer">
          <h5 @click="$router.push('/')">Close</h5>
        </div>
      </div>
    </div>
    <div class="md:flex mt-4 justify-center form-row">
      <!-- <div class=" md:w-2/5 flex align-middle">
        <img src="/img/Enter-OTP-pana.svg" alt="">
      </div> -->
      <div class=" md:w-2/5">
        <h5 class="text-xl font-bold text-center py-4">Request reset</h5>
        <div class="rounded-xl bg-white border-2 shadow-lg p-8">
          <h5 class="text-center pt-3">Enter email to reset password</h5>
          <div class="text-center text-primary mb-5">
              <router-link to="/auth/signup" class="text-sm text-center">Don't have an account ?</router-link>
            </div>
          <form @submit.prevent="onsubmit">
            <div class="form-input">
              <label for="email">Email</label>
              <input v-model.trim="state.email" type="email" name="email" required>
            </div>
            <!-- <div class="form-input">
              <label for="password">Password</label>
              <input v-model="state.password" type="password" name="password" required>
            </div> -->
            <div class="text-center text-primary mb-5">
              <router-link to="/auth/login" class="text-sm text-center">Remembered password ?</router-link>
            </div>
            <div class="btn-item">
              <button type="submit" class="rounded-xl bg-primary text-white">Request reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { useToast } from "vue-toastification"

const store = useStore()
const toast = useToast()
const state = reactive({
      errorMsg: '',
      successMsg: '',
      email: '',
      password: '',
      confirmPassword: ''
    })

const onsubmit = (e) => {
  state.errorMsg = ''
  if(!state.email ) {
    state.errorMsg = 'Add email'
    toast.error(state.errorMsg)
    return
  }
  if (!validEmail(state.email)) {
    state.errorMsg = 'Add a valid email'
    toast.error(state.errorMsg)
    return state.errorMsg
  }

  const data = {
    email: state.email,
    password: state.password
  }

  state.errorMsg = ''

  console.log('auth/login', data)

}

const validEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}
</script>

<style lang="scss" scoped>

</style>
