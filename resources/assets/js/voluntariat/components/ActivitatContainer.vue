<template>
  <v-app>
    <v-menu transition="slide-x-transition">
      <!--<v-slide-x-transition>-->
        <router-view :activitat="activitat"></router-view>
      <!--</v-slide-x-transition>-->
    </v-menu>
  </v-app>
</template>

<script>
  import * as actionTypes from '../store/action-types'
  import * as mutationTypes from '../store/mutation-types'

  export default {
    computed: {
      activitat: {
        get() {
          return this.$store.state.activitat
        },
        set(value) {
          this.$store.commit(mutationTypes.SET_ACTIVITAT, value)
        }
      }
    },
    props: ['id'],
    mounted () {
      this.$store.dispatch(actionTypes.GET_ACTIVITAT, this.id)
    }
  }
</script>