<template>
   <v-app>
       <!--<transition name="component-fade" appear>-->
       <v-container>
           <v-layout row>
               <v-flex d-flex xs12>
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
            }
        },
        props: ['volunteer'],
    }
</script>