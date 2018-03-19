<template>
  <v-app>
    <router-view :admin="admin"></router-view>
  </v-app>
</template>

<script>
  import * as actionTypes from '../store/action-types'
  import * as mutationTypes from '../store/mutation-types'

  export default {
    computed: {
      admin: {
        get() {
          return this.$store.state.admin
        },
        set(value) {
          this.$store.commit(mutationTypes.SET_ADMIN, value)
        }
      }
    },
    props: ['id'],
    mounted () {
      this.$store.dispatch(actionTypes.GET_ADMIN, this.id)
    }
  }
</script>