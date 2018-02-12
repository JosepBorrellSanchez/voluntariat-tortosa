<template>
  <v-app>
    <router-view :activitat="activitat"></router-view>
  </v-app>
</template>

<script>
  import * as actionTypes from '../store/action-types'
  import * as mutationTypes from '../store/mutation-types'

  export default {
    computed: {
      activitat: {
        get() {
          return this.$store.state.activitat
        },
        set(value) {
          this.$store.commit(mutationTypes.SET_ACTIVITAT, value)
        }
      }
    },
    props: ['id'],
    mounted () {
      this.$store.dispatch(actionTypes.GET_ACTIVITAT, this.id)
    }
  }
</script>