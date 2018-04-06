<template>
  <v-app>
    <router-view
      :activitat="activitat"
      :activity_volunteers="activity_volunteers"
      :activity_entities="activity_entities"
      @redirect="redirect">
    </router-view>
  </v-app>
</template>

<script>
  import * as actions from '../store/action-types'
  import * as mutations from '../store/mutation-types'

  export default {
    computed: {
      activitat: {
        get() {
          return this.$store.state.activitat
        },
        set(value) {
          this.$store.commit(mutations.SET_ACTIVITAT, value)
        }
      },
      activity_volunteers: {
        get() {
          return this.$store.state.activity_volunteers
        },
        set(value) {
          this.$store.commit(mutations.SET_ACTIVITY_USERS, value)
        }
      },
      activity_entities: {
        get() {
          return this.$store.state.activity_entities
        },
        set(value) {
          this.$store.commit(mutations.SET_ACTIVITY_ENTITIES, value)
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
      this.$store.dispatch(actions.GET_ACTIVITAT, this.id)
      this.$store.dispatch(actions.FETCH_ACTIVITY_USERS, this.id)
      this.$store.dispatch(actions.FETCH_ACTIVITY_ENTITIES, this.id)
    }
  }
</script>