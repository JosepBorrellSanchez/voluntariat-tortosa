<template>
  <v-app>
    <router-view :volunteer="volunteer" :info="info"></router-view>
  </v-app>
</template>

<script>
  import * as actionTypes from '../store/action-types'
  import * as mutationTypes from '../store/mutation-types'

  export default {
    computed: {
      volunteer: {
        get() {
          return this.$store.state.volunteer
        },
        set(value) {
          this.$store.commit(mutationTypes.SET_VOLUNTEER, value)
        }
      },
      info: {
        get() {
          return this.$store.state.info
        },
        set(value) {
          this.$store.commit(mutationTypes.SET_INFO, value)
        }
      }
    },
    props: ['id'],
    mounted () {
      this.$store.dispatch(actionTypes.GET_VOLUNTEER, this.id)
      this.$store.dispatch(actionTypes.GET_INFO, this.id)
    }
  }
</script>