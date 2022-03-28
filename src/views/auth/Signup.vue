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
      <!-- <div class=" md:w-3/6 flex align-middle">
        <img src="/img/Enter-OTP-pana.svg" alt="">
      </div> -->
      <div class=" md:w-[60%] mb-10">
        <h5 class="text-xl font-bold text-center py-4">Sign up</h5>
        <div class="rounded-xl bg-white border-2 border-gray-500 p-8">
          <h5 class="text-center pt-3">Welcome to Avalogs!</h5>
          <div class="text-center text-primary mb-5">
              <router-link to="/auth/login" class="text-sm text-center">Already have an account ?</router-link>
            </div>
          <form @submit.prevent="onsubmit">
              <div class="md:flex justify-between">
                <div class="form-input">
                  <label for="first-name">First Name</label>
                  <input v-model.trim="state.firstName" type="text" name="first-name" required>
                </div>
                <div class="form-input">
                  <label for="last-name">Last Name</label>
                  <input v-model.trim="state.lastName" type="text" name="last-name" required>
                </div>
              </div>
            <div class="md:flex justify-between">
              <div class="form-input">
                <label for="email">Email</label>
                <input v-model.trim="state.email" type="email" name="email" required>
              </div>
              <div class="form-input">
                <label for="phone">Phone</label>
                <input v-model.trim="state.phone" type="number" name="phone" required>
              </div>
            </div>
            <div class="md:flex justify-between">
              <div class="form-input">
                <label for="occupation">Occupation</label>
                <select v-model="state.occupation" class="w-full md:w-[220px]">
                <option value="Student">Student</option>
                <option value="Employed">Employed</option>
                <option value="Self-Employed">Self-Employed</option>
                <option value="Others">Others</option>
              </select>
              </div>
              <div class="form-input">
                <label for="sex">Sex</label>
                <input v-model.trim="state.sex" type="text" name="sex" required>
              </div>
            </div>
            <div class="md:flex justify-between">
              <div class="form-input">
                <label for="password">Password</label>
                <input v-model="state.password" type="password" name="password" required>
              </div>
              <div class="form-input">
                <label for="password">Confirm password</label>
                <input v-model="state.re_password" type="password" name="password" required>
              </div>
            </div>
            <div class="btn-item">
              <button type="submit" class="rounded-xl bg-primary text-white">Sign up</button>
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
      firstName: '',
      lastName: '',
      occupation: '',
      phone: 0,
      sex: '',
      email: '',
      password: '',
      re_password: ''
    })

const onsubmit = (e) => {
  state.errorMsg = ''
  if(!state.email || !state.password || !state.firstName || !state.lastName || !state.phone || !state.occupation || !state.sex) {
    state.errorMsg = 'Add Inputs'
    toast.error(state.errorMsg)
    return
  }
  if (!validEmail(state.email)) {
    state.errorMsg = 'Add a valid email'
    toast.error(state.errorMsg)
    return state.errorMsg
  }

  if(state.re_password !== state.password ) {
    state.errorMsg = `Passwords don't match`
    toast.error(state.errorMsg)
    return state.errorMsg
  }
  const data = {
    firstname: state.firstName,
    lastname: state.lastName,
    occupation: state.occupation,
    phone: state.phone,
    sex: state.sex,
    email: state.email,
    password: state.password,
    re_password: state.re_password
  }

  store.dispatch('auth/signUp', data)
}

const validEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}
</script>

<style lang="scss" scoped>
select {
  width: 220px !important;
}
</style>
