<template>
  <v-app>
    <transition name="fade">
      <!-- <router-link :to="{ name: 'Dashboard' }"></router-link> -->
      <router-view></router-view>
    </transition>
  </v-app>
</template>

<script>
  export default {
    mounted () {
      console.log('Container mounted')
    }
  }
</script>