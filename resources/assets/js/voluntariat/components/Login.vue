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
                required>
              </v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="password"
                label="Password"
                v-model="password"
                id="password"
                type="password"
                required>
              </v-text-field>
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
  import axios from 'axios'

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
          this.$store.dispatch(actions.DETERMINATE_ROLE)
          this.$store.dispatch(actions.FETCH_USER)
          let roles
          axios.get('api/user/roles').then((response) => {
            roles = response.data
            if (roles.includes('admin') || roles.includes('superAdmin')) {
              this.$router.push('/admin')
            } else if (roles.includes('entity')){
              this.$router.push('/entity')
            }
          }).catch((error) => {
            console.log(error)
          })
        }).catch(error => {
          console.log(error)
        }).then(() => {
          // this.loginLoading = true
        })
      }
    }
  }
</script>