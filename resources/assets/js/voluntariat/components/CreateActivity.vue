<template>
 <v-app>
   <v-container>
     <v-layout>
       <v-flex xs12>
         <v-card class="ma-1">
          <v-card-title>
            <v-layout column align-center>
              <h1>Nova Activitat</h1>
            </v-layout>
          </v-card-title>
          <v-card-text>
            <v-form v-model="valid">
              <v-layout row wrap v-if="this.role === 'superAdmin'">
                <v-flex xs6>
                  <v-subheader>Entitat organitzadora</v-subheader>
                </v-flex>
                <v-flex xs6>
                  <v-select
                    :items="entities"
                    v-model="select"
                    label="Select"
                    single-line
                    item-text="name"
                    return-object
                    :hint="`${select.name}`"
                    persistent-hint
                  ></v-select>
                </v-flex>
              </v-layout>
              <!--select user-->
              <!--input text nom activitat-->
              <!--select ambit-->
              <!--input text descripcio-->
              <!--input text destinataris-->
              <!--time hora_inici-->
              <!--time hora_fi-->
              <!--select tipus_horari-->
              <!--input int num_voluntaris_necessaris-->
              <!--input text coneixements_req-->
              <!--input text habititats_req-->
              <!--input text experiencia_req-->
              <!--input text titols_formacio_req-->
              <!--input text idiomes_req-->
              <!--boolean disponibilitat_vehicle_req-->
              <!--select condicio_fisica_req-->
              <!--select sexe_req-->
            </v-form>
          </v-card-text>
         </v-card>
       </v-flex>
     </v-layout>
   </v-container>
 </v-app>
</template>

<script>
  import * as mutations from "../store/mutation-types";
  import * as actions from "../store/action-types"

  export default {
    name: 'CreateActivity',
    data() {
      return {
        valid: false,
        select: { name: 'Entity' },
        // items: [
        //   { name: 'Pepe' },
        //   { name: 'Josep' }
        // ],
        role: null
      }
    },
    computed: {
      entities: {
        get() {
          return this.$store.state.entities
        },
        set(value) {
          this.$store.commit(mutations.SET_ENTITIES, value)
        }
      }
    },
    mounted() {
      this.role = this.$store.state.roles
      this.$store.dispatch(actions.FETCH_ENTITIES)
    }
  }
</script>