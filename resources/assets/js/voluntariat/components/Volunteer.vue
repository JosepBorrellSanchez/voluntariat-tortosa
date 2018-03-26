<template>
   <v-app>
       <!--<transition name="component-fade" appear>-->
       <v-container>
           <v-layout>
               <v-flex xs12>
                   <v-alert class="ma-1" type="warning" :value="true" v-if="!info.validat">
                     Aquest usuari no ha omplert el formulari.
                   </v-alert>
                   <v-card class="ma-1">
                       <v-card-title class="display-1 green lighten-1">{{ volunteer.name }}</v-card-title>
                       <v-layout row>
                           <v-card-text>
                               <ul class="ul-list">
                                   <li>Email: {{ volunteer.email }}</li>
                               </ul>
                           </v-card-text>
                       </v-layout>
                   </v-card>
               </v-flex>
           </v-layout>
           <v-layout>
               <v-flex xs12 lg6>
                   <v-card class="ma-1" v-if="info.validat">
                       <v-card-title>
                           <h2>Info</h2>
                       </v-card-title>
                       <v-card-text>
                           <ul class="ul-list">
                               <li>Nom: {{ volunteer.name }}</li>
                               <li>Cognoms: {{ info.cognoms }}</li>
                               <li>Correu: {{ volunteer.email }}</li>
                               <li>DNI: {{ info.dni }}</li>
                               <li>Tel: {{ info.telefon }}</li>
                               <li>Poblacio: {{ info.poblacio }}</li>
                               <li>Codi postal: {{ info.codi_postal }} </li>
                               <li>Adreça: {{ info.adreca }}</li>
                               <li>Data de naixement: {{ info.data_naixement }}</li>
                               <li>Nacionalitat: {{ info.nacionaliat }}</li>
                               <li>Llengües parlades: {{ info.llengues }}</li>
                               <li>Disponibilitat: {{ info.disponibilitat_mensual }} - {{ info.disponibilitat_diaria }} - {{ info.disponibilitat_horaria }}</li>
                               <li>Disponibilitat de vehicle: {{ info.disponibilitat_vehicle ? 'Si' : 'No'}}</li>
                               <li>Franges d'edat preferents: {{ info.franges_edat_preferents }}</li>
                               <li>Condició física: {{ info.condicio_fisica }}</li>
                           </ul>
                       </v-card-text>
                   </v-card>
               </v-flex>
               <v-flex xs12 lg6>
                   <v-card class="ma-1">
                       <v-card-title>
                         <h2>Inscrit a:</h2>
                       </v-card-title>
                       <v-data-table
                         :headers="headers"
                         :items="user_activities"
                         class="elevation-1">
                         <template slot="items" slot-scope="props">
                           <tr>
                             <td>{{ props.item.nom }}</td>
                               <td class="text-xs-right">
                                   <v-icon>clear</v-icon>
                               </td>
                           </tr>
                         </template>
                       </v-data-table>
                   </v-card>
               </v-flex>
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

  export default {
    data () {
      return {
        show: false,
        headers: [
          { text: 'Nom', align: 'left', value: 'name' },
        ]
      }
    },
    props: [
      'volunteer',
      'info',
      'user_activities'
    ],
  }
</script>