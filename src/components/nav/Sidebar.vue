<template>
  <div class="dash-side">
    <div class="sidebar">
      <div class="user-img">
        <img src="/img/wp5293460.jpg" alt="">
      </div>
      <div class="user-name">
        <h3>Great Adams</h3>
      </div>
      <div class="navigations">
        <ul class="navigate-list">
          <li
            v-for="route in routes"
            :key="route.url"
            class="navigate-item"
          >
            <img :src=route.img alt="">
            <router-link :to="route.url" class="navigate-link">{{ route.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import routes from '../../data/nav'

</script>

<style lang="scss" scoped>

</style>