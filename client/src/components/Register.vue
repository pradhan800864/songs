<template>
  <v-layout row>
    <v-flex md6 offset-xs3>
      <panel title="Register">
        <div class="pl-4 pr-0 pt-2 pb-2">
          <v-flex xs12 sm6 md4 offset-xs4><v-text-field name="email" v-model="email" placeholder="email" required/></v-flex>
          <br>
          <v-flex xs12 sm6 md4 offset-xs4><v-text-field type="password" name="password" v-model="password" placeholder="password"/></v-flex>
          <br>
          <div class="danger-alert" v-html="error"/>
          <v-btn class="cyan" @click="register" dark>Register</v-btn>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
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
