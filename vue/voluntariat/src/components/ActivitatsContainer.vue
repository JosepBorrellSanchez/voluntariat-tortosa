<template>
  <v-app>
    <transition name="fade">
      <router-view :activitats="activitats"></router-view>
    </transition>
  </v-app>
</template>

<script>
  export default {
  }
</script>