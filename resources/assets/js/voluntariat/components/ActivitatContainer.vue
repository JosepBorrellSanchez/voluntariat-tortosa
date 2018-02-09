<template>
  <v-app>
    <router-view :activitat="this.activitat"></router-view>
  </v-app>
</template>

<script>
  import * as actionTypes from '../store/action-types'

  export default {
    data () {
      return {
        activitat: this.$store.state.activitat
      }
    },
    props: ['id'],
    mounted () {
      this.$store.dispatch(actionTypes.GET_ACTIVITAT, this.id)
    }
  }
</script>