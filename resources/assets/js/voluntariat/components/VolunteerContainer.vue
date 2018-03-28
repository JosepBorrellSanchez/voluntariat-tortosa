<template>
  <v-app>
    <router-view
      :volunteer="volunteer"
      :info="info"
      :user_activities="user_activities"
      :loading="loading"
      @redirect="redirect"
      @delete="deleteActivity">
    </router-view>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Segur que vols desinscriure a {{ volunteer.name }} de l'activitat {{ activity.nom }}?</v-card-title>
        <v-card-actions>
          <v-btn color="green darken-1" flat @click.native="dialog = false">Cancel·la</v-btn>
          <v-btn color="green darken-1" @click="detachActivity" flat @click.native="dialog = false">Desinscriure</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  import * as actions from '../store/action-types'
  import * as mutations from '../store/mutation-types'

  export default {
    data() {
      return {
        dialog: false,
        activity: { name: null }
      }
    },
    computed: {
      volunteer: {
        get() {
          return this.$store.state.volunteer
        },
        set(value) {
          this.$store.commit(mutations.SET_VOLUNTEER, value)
        }
      },
      info: {
        get() {
          return this.$store.state.info
        },
        set(value) {
          this.$store.commit(mutations.SET_INFO, value)
        }
      },
      user_activities: {
        get() {
          return this.$store.state.activitats_user
        },
        set(value) {
          this.$store.commit(mutations.SET_ACTIVITATS_USER, value)
        }
      },
      loading: {
        get() {
          return this.$store.state.loading
        },
        set(value) {
          this.$store.commit(mutations.SET_LOADING, value)
        }
      }
    },
    methods: {
      deleteActivity(activity) {
        this.dialog = true
        this.activity = activity
      },
      detachActivity() {
       this.$store.dispatch(actions.DETACH_ACTIVITY, { activity: this.activity, user_id: this.id })
      },
      redirect(id) {
        let path = '/activitats/' + id
        this.$router.push({ path: path })
      }
    },
    props: ['id'],
    mounted () {
      this.$store.dispatch(actions.GET_VOLUNTEER, this.id)
      this.$store.dispatch(actions.GET_INFO, this.id)
      this.$store.dispatch(actions.FETCH_ACTIVITATS_USER, this.id)
    }
  }
</script>