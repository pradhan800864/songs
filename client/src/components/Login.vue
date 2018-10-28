<template>
  <v-layout row>
    <v-flex md6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>
            Login
          </v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-0 pt-2 pb-2">
          <v-flex xs12 sm6 md4 offset-xs4><v-text-field name="email" v-model="email" placeholder="email" required/></v-flex>
          <br>
          <v-flex xs12 sm6 md4 offset-xs4><v-text-field type="password" name="password" v-model="password" placeholder="password"/></v-flex>
          <br>
          <div class="danger-alert" v-html="error"/>
          <v-btn class="cyan" @click="login" dark>Login</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error{
    color: red
  }
</style>
