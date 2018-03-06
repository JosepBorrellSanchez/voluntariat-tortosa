<template>
  <v-app>
    <v-content>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <h1>Login</h1>
        <form @submit.prevent="login" method="post">
          <v-layout column>
            <v-flex>
              <v-text-field
                name="email"
                label="Email"
                v-model="email"
                id="email"
                type="email"
                required></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="password"
                label="Password"
                v-model="password"
                id="password"
                type="password"
                required></v-text-field>
            </v-flex>
            <v-flex class="text-xs-center" mt-5>
              <v-btn primary type="submit">Login</v-btn>
              <v-btn to="/">Home</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-content>
  </v-app>
</template>

<script>

  import * as actions from '../store/action-types'

  export default {
    name: 'login',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login () {
        // this.loginLoading = true
        const credentials = {
          'username': this.email,
          'password': this.password
        }
        this.$store.dispatch(actions.LOGIN, credentials).then(response => {
          // this.loginLoading = false
          this.$router.push('/dash')
//          window.location = '/home'  WEB!!!
        }).catch(error => {
          console.log(error)
          // this.loginErrorMessage = error.response.data.message
          // this.loginErrors = error.response.data.errors
        }).then(() => {
          // this.loginLoading = false
        })
      }
    }
  }
</script>