<template>
  <v-app>
    <v-container>
      <v-slide-y-transition mode="out-in">
        <v-layout column align-center>
          <h1>Dashboard</h1>
        </v-layout>
      </v-slide-y-transition>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    name: 'Dashboard',
    mounted () {
      console.log('Component mounted')
    }
  }
</script>