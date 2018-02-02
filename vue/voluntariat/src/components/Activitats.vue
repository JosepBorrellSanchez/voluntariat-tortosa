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
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.desc }}</td>
          </template>
        </v-data-table>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  import { mapMutations, mapActions } from 'vuex'

  export default {
    name: 'Activitats',
    data () {
      return {
        headers: [
          {
            text: 'Name',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Description', value: 'desc', align: 'left' }
        ]
      }
    },
    computed: {
      activitats: {
        get () {
          let act = this.$store.state.activitats
          // console.log(act)
          return act
        },
        set (value) {
          console.log(value)
          this.$store.commit('activitats', value)
        }
      }
    },
    methods: {
      ...mapMutations(['activitats']),
      ...mapActions(['fetchActivitats'])
    },
    mounted () {
      // this.$store.dispatch('fetchActivitats')
    }
  }
</script>