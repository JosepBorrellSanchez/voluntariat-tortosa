<template>
  <v-app>
    <router-view
      :activitat="activitat"
      :activity_volunteers="activity_volunteers"
      :activity_entities="activity_entities"
      :loading="loading"
      @redirectToVolunteer="redirectToVolunteer"
      @redirectToEntity="redirectToEntity"
      @deleteUser="deleteUser">
    </router-view>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card v-if="user !== null">
        <v-card-title class="headline">Segur que vols eliminar l'usuari "{{ user.name }}" d'aquesta activitat?</v-card-title>
        <v-card-actions>
          <v-btn color="green darken-1" flat @click.native="dialog = false">Cancel·la</v-btn>
          <v-btn color="green darken-1" @click="destroy( user, id)" flat @click.native="dialog = false">Elimina</v-btn>
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
        user: null,
      }
    },
    computed: {
      loading: {
        get() {
          return this.$store.state.loading
        },
        set(value) {
          this.$store.commit(mutations.SET_LOADING, value)
        }
      },
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
      deleteUser(user) {
        this.dialog = true
        this.user = user
      },
      destroy(user, activityId) {
        if(this.user.role === 'entity') {
          this.$store.dispatch(actions.DETACH_ENTITY, { user: user, activityId: activityId })
        } else if (this.user.role === 'volunteer') {
          this.$store.dispatch(actions.DETACH_VOLUNTEER, { user: user, activityId: activityId })
        }
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