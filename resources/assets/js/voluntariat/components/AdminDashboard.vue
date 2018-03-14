<template>
  <v-app>
    <v-container>
      <v-slide-y-transition mode="out-in">
        <v-layout column align-center>
          <h1>AdminDashboard</h1>
        </v-layout>
      </v-slide-y-transition>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    name: 'AdminDashboard',
    mounted () {
      console.log('Component mounted')
    }
  }
</script>