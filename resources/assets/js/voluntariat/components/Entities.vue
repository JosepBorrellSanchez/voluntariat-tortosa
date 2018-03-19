<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout class="contains" column align-center>
        <h1>Entitats</h1>
        <div v-if="loading">
          <v-progress-circular class="load" indeterminate fill></v-progress-circular>
        </div>
        <v-data-table
          v-bind:headers="headers"
          :items="entities"
          hide-actions
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td>
              <router-link :to="{ path: '/entitats/' + props.item.id  }">
                <v-icon>mode_edit</v-icon>
              </router-link>
              <router-link to="#">
                  <v-icon @click="sendEmit('delete', props.item)">delete_forever</v-icon>
              </router-link>
            </td>
          </template>
        </v-data-table>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<style>
  .contains {
    position: relative;
  }

  .load {
    position: absolute;
    top: 50%;
  }
</style>


<script>

  export default {
    name: 'Entities',
    data () {
      return {
        dialog: false,
        headers: [
          { text: 'Nom', value: 'nom', align: 'left' },
          // { text: 'Destinataris', value: 'destinataris', align: 'left' },
          // { text: 'Hora Inici', value: 'hora_inici' },
          // { text: 'Hora Fi', value: 'hora_fi' },
          // { text: 'Voluntaris necessaris', value: 'num_voluntaris_necessaris' }
        ],
        dialog: false
      }
    },
    props: [
      'entities',
      'loading'
    ],
    methods: {
      sendEmit(message, value) {
        this.$emit(message, value)
      }
    }
  }
</script>