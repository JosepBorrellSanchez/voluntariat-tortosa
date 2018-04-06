<template>
  <v-app>
    <router-view
      :activitat="activitat"
      :activity_volunteers="activity_volunteers"
      @redirect="redirect">
    </router-view>
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
      },
      activity_volunteers: {
        get() {
          return this.$store.state.activity_volunteers
        },
        set(value) {
          this.$store.commit(mutationTypes.SET_ACTIVITY_USERS, value)
        }
      }
    },
    methods: {
      redirect(id) {
        let path = '/voluntaris/' + id
        this.$router.push({ path: path })
      }
    },
    props: ['id'],
    mounted () {
      this.$store.dispatch(actionTypes.GET_ACTIVITAT, this.id)
      this.$store.dispatch(actionTypes.FETCH_ACTIVITY_USERS, this.id)
    }
  }
</script>