<template>
  <v-app>
    <v-content>
      <v-layout column align-center>
        <h1>Landing</h1>
        <v-btn to="/login" class="btn btn-primary">Login</v-btn>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'landing'
  }
</script>