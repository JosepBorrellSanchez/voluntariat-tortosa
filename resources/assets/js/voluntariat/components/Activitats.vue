<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <h1>Activitats</h1> 
        <v-data-table
          v-bind:headers="headers"
          :items="activitats"
          hide-actions
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td class="text-xs-left">{{ props.item.nom }}</td>
            <td class="text-xs-left">{{ props.item.destinataris }}</td>
            <td class="text-xs-right">{{ props.item.hora_inici }}</td>
            <td class="text-xs-right">{{ props.item.hora_fi }}</td>
            <td class="text-xs-right">{{ props.item.num_voluntaris_necessaris }}</td>
          </template>
        </v-data-table>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Activitats',
    data () {
      return {
        headers: [
          { text: 'Nom', value: 'nom', align: 'left' },
          { text: 'Destinataris', value: 'destinataris', align: 'left' },
          { text: 'Hora Inici', value: 'hora_inici' },
          { text: 'Hora Fi', value: 'hora_fi' },
          { text: 'Voluntaris necessaris', value: 'num_voluntaris_necessaris' }
        ]
      }
    },
    computed: {
      activitats: {
        get () {
          return this.$store.state.activitats
        },
        set (value) {
          this.$store.commit('activitats', value)
        }
      }
    },
    methods: {
      ...mapActions(['fetchActivitats'])
    },
    mounted () {
      this.$store.dispatch('fetchActivitats')
    }
  }
</script>