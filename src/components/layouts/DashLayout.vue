<template>
  <div>
    <Sidebar />
    <TopInfoVue />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import Sidebar from '../nav/Sidebar.vue'
import TopInfoVue from '../nav/TopInfo.vue'

const router = useRouter()
const store = useStore()
const user = store.state.user
console.log(user)
onMounted(() => {
  if(!user.token) {
    router.push('/auth/login')
  }
})


</script>

<style lang="scss" scoped>

</style>