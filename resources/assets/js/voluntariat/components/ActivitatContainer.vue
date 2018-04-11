<template>
  <v-app>
    <router-view
      :activitat="activitat"
      :activity_volunteers="activity_volunteers"
      :activity_entities="activity_entities"
      @redirectToVolunteer="redirectToVolunteer"
      @redirectToEntity="redirectToEntity"
      @deleteUser="deleteUser"
      @deleteEntity="deleteEntity">
    </router-view>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Segur que vols eliminar aquesta activitat?</v-card-title>
        <v-card-actions>
          <v-btn color="green darken-1" flat @click.native="dialog = false">Cancel·la</v-btn>
          <v-btn color="green darken-1" @click="destroy(activitat)" flat @click.native="dialog = false">Elimina</v-btn>
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
        dialog: false
      }
    },
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
      redirectToVolunteer(id) {
        let path = '/voluntaris/' + id
        this.$router.push({ path: path })
      },
      redirectToEntity(id) {
        let path = '/entitats/' + id
        this.$router.push({ path: path })
      },
      deleteUser(volunteer) {
        // this.$store.dispatch(actions.DETACH_VOLUNTEER, volunteer)
      },
      deleteEntity(entity) {
        // this.$store.dispatch(actions.DETACH_ENTITY, entity)
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