<template>
  <v-app >
  <v-toolbar dark app color="blue">
    <v-toolbar-title>Imie Job-Dating</v-toolbar-title>
     <v-spacer></v-spacer>
    <v-toolbar-items v-if="isSession()" class="hidden-sm-and-down">
      <v-btn flat @click="toOffer()">Offers</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat @click="disconnect">Déconnexion</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
</v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  methods:{
    isSession(){
      let sessionLive
      return  sessionLive= this.$session.exists()
    },
    disconnect(){
      this.$session.destroy()
      this.$router.push('/')
    },
    toOffer(){
      this.$router.push('/offer')
    }
  },

  name: 'App'
}
</script>

<style>

.container {
  margin: 0;
  padding: 0;
}

</style>
