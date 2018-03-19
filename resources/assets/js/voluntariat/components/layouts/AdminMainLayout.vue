<template>
  <v-app v-resize="onResize">
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      v-model="drawer"
      :mobile-break-point="mobileBreakPoint"
      enable-resize-watcher
      :clipped="clipped"
      hide-overlay
      absolute
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          router :to="item.href"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> 
    <v-toolbar
      app
      :clipped-left="clipped"
      absolute
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-menu
          offset-x
          :close-on-content-click="false"
          :nudge-width="200"
          v-model="menu"
        >
          <v-btn flat slot="activator">
            <v-icon>account_circle</v-icon>
            {{ user.name }}
          </v-btn>
          <v-card>
            <v-list>
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img src="https://vuetifyjs.com/static/doc-images/john.jpg" alt="John">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{ user.name }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ user.email }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <v-divider></v-divider>
            <v-list>
              <v-list-tile>
                <v-list-tile-action>
                  <v-btn flat href="/" @click="logout">
                    Logout
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-slide-x-transition>
        <router-view/>
      </v-slide-x-transition>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import axios from 'axios'
  import * as mutationTypes from '../../store/mutation-types'
  import * as actionTypes from '../../store/action-types'

export default {
  name: 'app',
  data () {
    return {
      clipped: true,
      clippedLeft: false,
      drawer: true,
      fixed: false,
      mobileBreakPoint: 900,
      items: [
        { icon: 'home', title: 'Landing', href: '/' },
        { icon: 'home', title: 'Dashboard', href: '/admin' },
        { icon: 'assignment', title: 'Activitats', href: '/activitats' },
        { icon: 'home', title: 'Entitats', href: '/entitats' },
        { icon: 'home', title: 'Voluntaris', href: '/voluntaris'},
        { icon: 'home', title: 'Administradors', href: '/admins'},
        { icon: 'account_box', title: 'El meu compte' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Voluntariat Tortosa',
      windowSize: {
        x: 0,
        y: 0
      },
      menu: false,
      // user: this.$store.state.user
    }
  },
  computed: {
    user: {
      get() {
        return this.$store.state.user
      },
      set(value) {
        this.$store.commit(mutationTypes.SET_USER, value)
      }
    }
  },
  methods: {
    onResize () {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
    },
    logout () {
      // let config = {
      //   headers: { 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content') }
      // }
      this.$store.dispatch(actionTypes.LOGOUT)

      // let config = {
      //   headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') }
      // }
      // axios.post('logout').then((response) => {
      //   console.log('Logout!')
      // }).catch((error) => {
      //   console.log(error);
      // });
    }
  },
  mounted () {
    this.onResize()
    // this.$store.dispatch(actionTypes.FETCH_USER, 1);
  }
}
</script>

