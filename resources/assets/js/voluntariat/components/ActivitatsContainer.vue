<template>
  <v-app>
    <transition name="fade">
      <router-view
        @delete="deleteActivitat">
      </router-view>
    </transition>
  </v-app>
</template>

<script>
  import axios from 'axios'
  import * as actionTypes from '../store/action-types'
  import createApi from '../api/api_crud_activitats'

  const crud = createApi('/api/activitats')

  export default {
    methods: {
      reloadActivitats: () => {
        this.$store.dispatch([actionTypes.FETCH_ACTIVITATS])
      },
      deleteActivitat: (activitat) => {
        crud.delete(activitat).then((response) => {
          this.reloadActivitats()
          console.log('Activitat eliminada');
        }).catch((error) => {
          console.log(error);
        });
      }
    }
  }
</script>