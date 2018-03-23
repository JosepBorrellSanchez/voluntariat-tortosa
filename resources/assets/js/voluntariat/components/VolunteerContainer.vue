<template>
  <v-app>
    <router-view :volunteer="volunteer" :info="info" :user_activities="user_activities"></router-view>
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
      },
      user_activities: {
        get() {
          return this.$store.state.activitats_user
        },
        set(value) {
          this.$store.commit(mutationTypes.SET_ACTIVITATS_USER, value)
        }
      }
    },
    props: ['id'],
    mounted () {
      this.$store.dispatch(actionTypes.GET_VOLUNTEER, this.id)
      this.$store.dispatch(actionTypes.GET_INFO, this.id)
      this.$store.dispatch(actionTypes.FETCH_ACTIVITATS_USER, this.id)
    }
  }
</script>