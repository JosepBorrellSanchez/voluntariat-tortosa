<template>
  <v-app>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </v-app>
</template>

<script>
  export default {
    mounted () {
    }
  }
</script>