<template>
  <v-app>
    <transition name="fade">
      <router-view
        :admins="admins"
        :loading="loading"
        @redirect="redirect"
        @delete="deleteAdmins">
      </router-view>
    </transition>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Segur que vols eliminar aquesta activitat?</v-card-title>
        <v-card-actions>
          <v-btn color="green darken-1" flat @click.native="dialog = false">Cancel·la</v-btn>
          <v-btn color="green darken-1" @click="destroy(admin)" flat @click.native="dialog = false">Elimina</v-btn>
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
        admin: null
      }
    },
    computed: {
      admins: {
        get () {
          return this.$store.state.admins
        },
        set (value) {
          this.$store.commit(mutations.SET_ADMINS, value)
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
      deleteAdmins: function (admin) {
        this.dialog = true
        this.admin = admin
      },
      destroy: function (admin) {
        this.$store.dispatch(actions.DELETE_ADMIN, admin.id)
      },
      redirect(id) {
        let path = '/admins/' + id
        this.$router.push({ path: path })
      }
    },
    mounted () {
      this.$store.dispatch(actions.FETCH_ADMINS)
    }
  }
</script>