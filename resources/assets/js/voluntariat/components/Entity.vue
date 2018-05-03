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
                       <v-card-title class="display-1 green lighten-1">{{ entity.name }}</v-card-title>
                       <v-layout row>
                           <v-card-text>
                               <ul class="ul-list">
                                   <li>{{ info.tipus_activitat }}</li>
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
                               <li>Nom: {{ entity.name }}</li>
                             <li>NIF: {{ info.nif }}</li>
                             <li>Persona de contacte: {{ info.persona_contacte }}</li>
                             <li>Email: {{ info.email }}</li>
                             <li>Tel: {{ info.tel }}</li>
                             <li>Web: {{ info.web }}</li>
                             <li>Adreça: {{ info.adreca }}</li>
                             <li>Poblacio: {{ info.poblacio }}</li>
                             <li>CP: {{ info.codi_postal }}</li>
                           </ul>
                       </v-card-text>
                   </v-card>
               </v-flex>
               <v-flex xs12 lg6>
                 <v-card class="ma-1">
                   <v-card-title>
                   <h2>Activitats organitzades:</h2>
                   </v-card-title>
                   <v-data-table
                     :headers="headers"
                     :items="user_activities"
                     class="elevation-1">
                     <template slot="items" slot-scope="props">
                       <tr @click="sendEmit('redirect', props.item.id)">
                         <td>{{ props.item.nom }}</td>
                         <td class="text-xs-right">
                           <v-btn icon :loading="loading" @click.stop="sendEmit('delete', props.item)">
                             <v-icon>clear</v-icon>
                           </v-btn>
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
                headers: [
                  { text: 'Nom', align: 'left', value: 'name' },
                ]
            }
        },
        props: [
          'entity',
          'user_activities',
          'info',
          'loading'
        ],
        methods: {
          sendEmit(message, value) {
            this.$emit(message, value)
          }
        }
    }
</script>