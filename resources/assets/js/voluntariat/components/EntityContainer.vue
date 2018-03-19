<template>
  <v-app>
    <router-view :entity="entity"></router-view>
  </v-app>
</template>

<script>
  import * as actionTypes from '../store/action-types'
  import * as mutationTypes from '../store/mutation-types'

  export default {
    computed: {
      entity: {
        get() {
          return this.$store.state.entity
        },
        set(value) {
          this.$store.commit(mutationTypes.SET_ENTITY, value)
        }
      }
    },
    props: ['id'],
    mounted () {
      this.$store.dispatch(actionTypes.GET_ENTITY, this.id)
    }
  }
</script>