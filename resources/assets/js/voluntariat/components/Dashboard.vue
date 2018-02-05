<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <blockquote>
          Dashboard
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  export default {
    name: 'Dashboard',
    mounted () {
      console.log('Component mounted')
    }
  }
</script>