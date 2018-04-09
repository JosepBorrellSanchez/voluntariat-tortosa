<template>
   <v-app>
       <!--<transition name="component-fade" appear>-->
       <v-container>
           <v-layout row>
               <v-flex d-flex xs12>
                   <v-card class="ma-1">
                       <v-card-title class="display-1 green lighten-1">
                           <v-layout row justify-space-between>
                               <span>{{ activitat.nom }}</span>
                               <!--<v-btn color="blue" class="white&#45;&#45;text">-->
                                   <!--<v-icon left>add_circle</v-icon>-->
                                   <!--inscriume-->
                               <!--</v-btn>-->
                           </v-layout>
                       </v-card-title>
                       <v-layout row wrap>
                           <v-card-text>
                               <ul class="ul-list">
                                   <li>Àmbit: {{ activitat.ambit}}</li>
                                   <li>Voluntaris necessaris: {{ activitat.num_voluntaris_necessaris }}</li>
                                   <li>Horari: {{ String(activitat.hora_inici).substring(0, 5) }} - {{ String(activitat.hora_fi).substring(0, 5) }}</li>
                               </ul>
                           </v-card-text>
                           <v-card-text>{{ activitat.descripcio }}</v-card-text>
                       </v-layout>
                   </v-card>
               </v-flex>
           </v-layout>
           <v-layout row wrap>
               <v-flex xs6>
                   <v-card class="ma-1">
                       <v-card-title>
                           <h3>Requisits:</h3>
                       </v-card-title>
                       <v-card-text>
                           <ul class="ul-list">
                               <li>Horari: {{ activitat.tipus_horari }}</li>
                               <li>Coneixements: {{ activitat.coneximents_req }}</li>
                               <li>Habilitats: {{ activitat.habilitats_req }}</li>
                               <li>Experiencia: {{ activitat.experiencia_req }}</li>
                               <li>Formació: {{ activitat.titols_formacio_req }}</li>
                               <li>Idiomes: {{ activitat.idiomes_req }}</li>
                               <li>Vehicle: {{ activitat.disponibilitat_vehicle_req }}</li>
                               <li>Condició física: {{ activitat.condicio_fisica_req }}</li>
                               <li>Sexe: {{ activitat.sexe_req }}</li>
                           </ul>
                       </v-card-text>
                   </v-card>
               </v-flex>
               <v-flex xs6 >
                   <v-card class="ma-1">
                       <v-card-title>
                           <h3>Voluntaris inscrits:</h3>
                       </v-card-title>
                       <v-card-text v-if="activity_volunteers.length === 0">
                           <span>No hi ha voluntaris registrats dins aquesta activitat</span>
                       </v-card-text>
                       <v-list v-else v-for="user in activity_volunteers" :key="user.name">
                           <v-list-tile avatar @click="sendEmit('redirectToVolunteer', user.id)">
                                   <v-list-tile-avatar>
                                       <img :src="user.avatar">
                                   </v-list-tile-avatar>
                                   <v-list-tile-content>
                                       <v-list-tile-title v-text="user.name"></v-list-tile-title>
                                   </v-list-tile-content>
                           </v-list-tile>
                       </v-list>
                   </v-card>
                   <v-card class="ma-1">
                       <v-card-title>
                           <h3>Entitats organitzatives:</h3>
                       </v-card-title>
                       <v-card-text v-if="activity_entities.length === 0">
                           <span>No s'han trobat entitats organitzatives</span>
                       </v-card-text>
                       <v-list v-else v-for="entity in activity_entities" :key="entity.name">
                           <v-list-tile avatar @click="sendEmit('redirectToEntity', entity.id)">
                               <v-list-tile-avatar>
                                   <img :src="entity.avatar">
                               </v-list-tile-avatar>
                               <v-list-tile-content>
                                   <v-list-tile-title v-text="entity.name"></v-list-tile-title>
                               </v-list-tile-content>
                           </v-list-tile>
                       </v-list>
                   </v-card>
               </v-flex>
               <!--<v-flex xs6 >-->
                   <!--<v-card class="ma-1">-->
                       <!--<v-card-title>-->
                           <!--<h3>Entitats organitzatives:</h3>-->
                       <!--</v-card-title>-->
                       <!--<v-card-text v-if="activity_entities.length === 0">-->
                           <!--<span>No s'han trobat entitats organitzatives</span>-->
                       <!--</v-card-text>-->
                       <!--<v-list v-else v-for="entity in activity_entities" :key="entity.name">-->
                           <!--<v-list-tile avatar @click="">-->
                               <!--<v-list-tile-avatar>-->
                                   <!--<img :src="entity.avatar">-->
                               <!--</v-list-tile-avatar>-->
                               <!--<v-list-tile-content>-->
                                   <!--<v-list-tile-title v-text="entity.name"></v-list-tile-title>-->
                               <!--</v-list-tile-content>-->
                           <!--</v-list-tile>-->
                       <!--</v-list>-->
                   <!--</v-card>-->
               <!--</v-flex>-->
           </v-layout>
       </v-container>
       <!--</transition>-->
   </v-app>
</template>

<style>
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .3s ease;
    }
    .component-fade-enter, .component-fade-leave-to
        /* .component-fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .ul-list {
        list-style-type: none;
    }
</style>

<script>
    import * as actionTypes from '../store/action-types'
    import * as mutationTypes from '../store/mutation-types'

    export default {
        data () {
            return {
                show: false,
                items: [
                  { title: 'hey', avatar: 'http://via.placeholder.com/50x50'}
                ]
            }
        },
        props: [
          'activitat',
          'activity_volunteers',
          'activity_entities'
        ],
        methods: {
          sendEmit(message, value) {
            this.$emit(message, value)
          }
        }
    }
</script>