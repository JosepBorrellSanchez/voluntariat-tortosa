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
              <!--select user-->
              <v-layout row wrap v-if="this.role === 'superAdmin'">
                <v-flex xs6>
                  <v-subheader>Entitat organitzadora</v-subheader>
                </v-flex>
                <v-flex xs6>
                  <v-select
                    :items="entities"
                    v-model="userSelected"
                    label="Select"
                    single-line
                    item-text="name"
                    return-object
                    :hint="`${userSelected.name}`"
                    persistent-hint>
                  </v-select>
                </v-flex>
              </v-layout>
              <!--input text nom activitat-->
              <v-layout row wrap>
                <v-text-field
                  label="Name"
                  v-model="entity.name"
                  :rules="nameRules"
                  :counter="40"
                  required>
                </v-text-field>
              </v-layout>
              <!--select ambit-->
              <v-layout row wrap>
                <v-flex xs6>
                  <v-subheader>Àmbit:</v-subheader>
                </v-flex>
                <v-flex xs6>
                  <v-select
                    :items="ambits"
                    v-model="entity.ambit"
                    label="Select"
                    single-line
                    item-text="name"
                    return-object
                    persistent-hint>
                  </v-select>
                </v-flex>
              </v-layout>
              <!--input text descripcio-->
              <v-layout row wrap>
                <v-text-field
                  label="Descripció"
                  v-model="entity.description"
                  :rules="descriptionRules"
                  :counter="255">
                </v-text-field>
              </v-layout>
              <!--input text destinataris-->
              <v-layout row wrap>
                <v-text-field
                  label="Destinataris"
                  v-model="entity.destinataris"
                  :rules="destinatarisRules"
                  :counter="40"
                  required>
                </v-text-field>
              </v-layout>
              <!--time hora_inici-->
              <v-layout row wrap>
                <v-flex xs12 md5>
                  <v-menu
                    ref="menu"
                    lazy
                    :close-on-content-click="false"
                    v-model="menu1"
                    transition="scale-transition"
                    offset-y
                    full-width
                    :nudge-right="40"
                    max-width="290px"
                    min-width="290px"
                    :return-value.sync="entity.hora_inici"
                  >
                    <v-text-field
                      slot="activator"
                      label="Hora inici"
                      v-model="entity.hora_inici"
                      prepend-icon="access_time"
                      readonly>
                    </v-text-field>
                    <v-time-picker v-model="entity.hora_inici" @change="$refs.menu.save(entity.hora_inici)">
                    </v-time-picker>
                  </v-menu>
                </v-flex>
                <v-spacer>
                </v-spacer>
                <!--time hora_fi-->
                <v-flex xs12 md5>
                  <v-menu
                    ref="menu"
                    lazy
                    :close-on-content-click="false"
                    v-model="menu2"
                    transition="scale-transition"
                    offset-y
                    full-width
                    :nudge-right="40"
                    max-width="290px"
                    min-width="290px"
                    :return-value.sync="entity.hora_fi"
                  >
                    <v-text-field
                      slot="activator"
                      label="Hora fi"
                      v-model="entity.hora_fi"
                      prepend-icon="access_time"
                      readonly>
                    </v-text-field>
                    <v-time-picker v-model="entity.hora_fi" @change="$refs.menu.save(entity.hora_fi)">
                    </v-time-picker>
                  </v-menu>
                </v-flex>
              </v-layout>
              <!--select tipus_horari-->
              <v-layout row wrap>
                <v-flex xs6>
                  <v-subheader>Tipus horari</v-subheader>
                </v-flex>
                <v-flex xs6>
                  <v-select
                    :items="tipus_horaris"
                    v-model="entity.tipus_horari"
                    label="Select"
                    single-line
                    item-text="name"
                    return-object
                    persistent-hint>
                  </v-select>
                </v-flex>
              </v-layout>
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
        entity: {},
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 40) || 'Name must be less than 10 characters'
        ],
        descriptionRules: [
          v => (v && v.length <= 255) || "La descripció no pot excedir els 255 caràcters"
        ],
        destinatarisRules: [
          v => (v && v.length <= 40) || "Els destinataris no poden excedir els 40 caràcters"
        ],
        userSelected: { name: 'Entity' },
        ambitSelected: { ambit: 'Default' },
        ambits: [
          { name: 'Cultura'},
          { name: 'Escolar'},
          { name: 'Artístic'},
          { name: 'Esportiu'},
          { name: 'Lleure' },
          { name: 'Suport'}
        ],
        tipus_horaris: [
          { name: 'Puntual' },
          { name: 'Periòdic' }
        ],
        role: null,
        menu1: false,
        menu2: false,
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