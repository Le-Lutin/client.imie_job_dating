<template>
      <v-container fluid>
    <div class="container-login">
      <div class="bg-style"></div>
    </div>
  </v-container>
</template>

<script>
export default {
  created() {
    this.unconnectedFallback()
  },

  methods: {
    unconnectedFallback () {
      if(this.$route.path !== "/" && !this.$session.exists()){
        this.$router.push('/')
      }
    }
  }
}
</script>

<style>
.container-login {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  height: 100vh;

  background-color: #222F3F;
}

.bg-style {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 300px;

  background: #222F3F url('../assets/itstime.jpg') top center no-repeat;
  background-size: cover;
}

.bg-style::before {
  content: "";
  position: absolute;

  bottom: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(34,47,63,1) 0%,rgba(34,47,63,0) 100%);
}
</style>