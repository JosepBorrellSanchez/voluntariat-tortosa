<template>
  <v-app>
    <transition name="fade">
      <router-view
        :activitats="activitats"
        :loading="loading"
        @redirect="redirect"
        @delete="deleteActivitat">
      </router-view>
    </transition>
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
  import createApi from '../api/api_crud_activitats'
  import * as mutations from '../store/mutation-types'

  const crud = createApi('/api/activitats')

  export default {
    data () {
      return {
        dialog: false,
        activitat: null,
        user: null
      }
    },
    computed: {
      activitats: {
        get () {
          return this.$store.state.activitats_user
        },
        set (value) {
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
      deleteActivitat: function (activitat) {
        this.dialog = true
        this.activitat = activitat
      },
      destroy: function (activitat) {
        let roles = this.$store.state.roles
        if(roles === "volunteer") {
          this.$store.dispatch(actions.DETACH_ACTIVITY, { activitat: activitat, user_id: this.user.id })
        } else {
          this.$store.dispatch(actions.DELETE_ACTIVITAT, { activitat: activitat, user_id: this.user.id })
        }
      },
      redirect: function (id) {
        let path = '/activitats_user/' + id;
        this.$router.push({ path: path })
      }
    },
    mounted () {
      this.user = this.$store.state.user
      this.$store.dispatch(actions.FETCH_ACTIVITATS_USER, this.user.id)
    }
  }
</script>