<template>
  <v-app>
    <router-view
      :entity="entity"
      :info="info"
      :user_activities="user_activities"
      :loading="loading"
      @delete="deleteActivity">
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
        activitat: null,
        dialog: false
      }
    },
    computed: {
      entity: {
        get() {
          return this.$store.state.entity
        },
        set(value) {
          this.$store.commit(mutations.SET_ENTITY, value)
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
      loading: {
        get() {
          return this.$store.state.loading
        },
        set(value) {
          this.$store.commit(mutations.SET_LOADING, value)
        }
      },
      user_activities: {
        get() {
          return this.$store.state.activitats_user
        },
        set(value) {
          this.$store.commit(mutations.SET_ACTIVITATS_USER, value)
        }
      }
    },
    methods: {
      deleteActivity(activitat) {
        this.dialog = true
        this.activitat = activitat
      },
      destroy(activitat) {
        this.$store.dispatch(actions.DELETE_ACTIVITAT, { activitat: activitat, user_id: this.id })
      }
    },
    props: ['id'],
    mounted () {
      this.$store.dispatch(actions.GET_ENTITY, this.id)
      this.$store.dispatch(actions.GET_INFO, this.id)
      this.$store.dispatch(actions.FETCH_ENTITY_ACTIVITIES, this.id)
    }
  }
</script>