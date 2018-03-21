<template>
  <v-app>
    <transition name="fade">
      <router-view
        :volunteers="volunteers"
        :loading="loading"
        @delete="deleteVolunteer"
        @redirect="redirect">
      </router-view>
    </transition>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Segur que vols eliminar aquesta activitat?</v-card-title>
        <v-card-actions>
          <v-btn color="green darken-1" flat @click.native="dialog = false">Cancel·la</v-btn>
          <v-btn color="green darken-1" @click="destroy(volunteer)" flat @click.native="dialog = false">Elimina</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  import * as actions from '../store/action-types'
  import * as mutations from '../store/mutation-types'

  export default {
    data () {
      return {
        dialog: false,
        volunteer: null
      }
    },
    computed: {
      volunteers: {
        get () {
          return this.$store.state.volunteers
        },
        set (value) {
          this.$store.commit(mutations.SET_VOLUNTEERS, value)
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
      deleteVolunteer: function (volunteer) {
        this.dialog = true
        this.volunteer = volunteer
      },
      destroy: function (volunteer) {
        this.$store.dispatch(actions.DELETE_VOLUNTEER, volunteer.id)
      },
      redirect: function (id) {
        let path = '/voluntaris/' + id;
        this.$router.push({ path: path })
      }
    },
    mounted () {
      this.$store.dispatch(actions.FETCH_VOLUNTEERS)
    }
  }
</script>