<template>
   <v-toolbar class="cyan" fixed dark>
    <v-toolbar-title class="mr-3" dark><span class="home" @click="navigateTo('HelloWorld')">Songs</span></v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark @click="navigateTo({name: 'songs'})">BROWSE</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'login'})">LOGIN</v-btn>
      <v-btn flat dark v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'register'})">SIGN UP</v-btn>
      <v-btn flat dark v-if="$store.state.isUserLoggedIn" @click="logout">LOG OUT</v-btn>

    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'HelloWorld'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    cursor: pointer;
  }
  .home:hover {
      color:darkslategray;
  }
</style>
