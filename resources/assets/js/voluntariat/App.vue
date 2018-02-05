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
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
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
        { icon: 'home', title: 'Dashboard', href: '/' },
        { icon: 'assignment', title: 'Les meves activitats', href: '/activitats' },
        { icon: 'account_box', title: 'El meu compte' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Voluntariat Tortosa',
      windowSize: {
        x: 0,
        y: 0
      }
    }
  },
  watch: {
    /* windowSize (x, y) {
      if (this.windowSize.x < this.mobileBreakPoint) {
        this.fixed = false
        this.clipped = true
      } else {
        this.fixed = true
        this.clipped = false
      }
    } */
  },
  methods: {
    onResize () {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
    }
  },
  mounted () {
    this.onResize()
  },
  name: 'App'
}
</script>

