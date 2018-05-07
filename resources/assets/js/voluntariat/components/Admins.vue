<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout class="contains" column align-center>
        <h1>Admins</h1>
        <div v-if="loading">
          <v-progress-circular class="load" indeterminate fill></v-progress-circular>
        </div>
        <v-data-table
          v-bind:headers="headers"
          :items="admins"
          hide-actions
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <tr @click="sendEmit('redirect', props.item.id)">
              <td class="text-xs-left">{{ props.item.name }}</td>
              <td class="text-xs-left">{{ props.item.email }}</td>
              <td class="text-xs-right">
                <!--<router-link :to="{ path: '/admins/' + props.item.id  }">-->
                  <!--<v-icon>mode_edit</v-icon>-->
                <!--</router-link>-->
                <!--<router-link to="#">-->
                  <!--<v-icon @click.stop="sendEmit('delete', props.item)">delete_forever</v-icon>-->
                <!--</router-link>-->
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
    name: 'Admins',
    data () {
      return {
        headers: [
          { text: 'Nom', value: 'nom', align: 'left' },
          { text: 'Email', value: 'email', align: 'left'}
        ]
      }
    },
    props: [
      'admins',
      'loading'
    ],
    methods: {
      sendEmit(message, value) {
        this.$emit(message, value)
      }
    }
  }
</script>