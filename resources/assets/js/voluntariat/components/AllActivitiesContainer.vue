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
        activitat: null
      }
    },
    computed: {
      activitats: {
        get () {
          return this.$store.state.activitats
        },
        set (value) {
          this.$store.commit(mutations.SET_ACTIVITATS, value)
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
        this.activitat = activitat
        this.dialog = true
      },
      destroy: function (activitat) {
        this.$store.dispatch(actions.DELETE_ACTIVITY, activitat)
      },
      redirect(id) {
        let path = '/activitats/' + id
        this.$router.push({ path: path })
      }
    },
    mounted () {
      this.$store.dispatch(actions.FETCH_ACTIVITATS)
    }
  }
</script>