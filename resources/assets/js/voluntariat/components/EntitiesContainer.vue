<template>
  <v-app>
    <transition name="fade">
      <router-view
        :entities="entities"
        :loading="loading"
        @redirect="redirect"
        @delete="deleteEntity">
      </router-view>
    </transition>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Segur que vols eliminar aquesta activitat?</v-card-title>
        <v-card-actions>
          <v-btn color="green darken-1" flat @click.native="dialog = false">Cancel·la</v-btn>
          <v-btn color="green darken-1" @click="destroy(entity)" flat @click.native="dialog = false">Elimina</v-btn>
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
        entity: null
      }
    },
    computed: {
      entities: {
        get () {
          return this.$store.state.entities
        },
        set (value) {
          this.$store.commit(mutations.SET_ENTITY, value)
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
      deleteEntity: function (entity) {
        this.dialog = true
        this.entity = entity
      },
      destroy: function (entity) {
        this.$store.dispatch(actions.DELETE_ENTITY, entity.id)
      },
      redirect(id) {
        let path = '/entitats/' + id
        this.$router.push({ path: path })
      }
    },
    mounted () {
      this.$store.dispatch(actions.FETCH_ENTITIES)
    }
  }
</script>