<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout class="contains" column align-center>
        <h1>Activitats</h1> 
        <div v-if="loading">
          <v-progress-circular class="load" indeterminate fill></v-progress-circular>
        </div>
        <v-data-table
          v-bind:headers="headers"
          :items="activitats"
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <tr @click="sendEmit('redirect', props.item.id)">
              <td class="text-xs-left">{{ props.item.nom }}</td>
              <td class="text-xs-left">{{ props.item.destinataris }}</td>
              <td class="text-xs-right">{{ String(props.item.hora_inici).substring(0, 5) }} - {{ String(props.item.hora_fi).substring(0, 5) }}</td>
              <td class="text-xs-right">{{ props.item.num_voluntaris_necessaris }}</td>
              <td>
                <v-btn icon :loading="loading" @click.stop="sendEmit('delete', props.item)">
                  <v-icon>clear</v-icon>
                </v-btn>
              </td>
            </tr>
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
    name: 'Activitats',
    data () {
      return {
        headers: [
          { text: 'Nom', value: 'nom', align: 'left' },
          { text: 'Destinataris', value: 'destinataris', align: 'left' },
          { text: 'Horari', value: 'horari' },
          { text: 'Voluntaris necessaris', value: 'num_voluntaris_necessaris' }
        ]
      }
    },
    props: [
      'activitats',
      'loading'
    ],
    methods: {
      sendEmit(message, value) {
        this.$emit(message, value)
      }
    }
  }
</script>