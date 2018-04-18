<template>
  <v-container fluid>
    <div class="container-login">
      <div class="bg-style"></div>
      <div class="container-form">
        <h2 class="title-login">Who are you ?</h2>
      </div>
    </div>
  </v-container>
</template>

<script>
 
</script>

<style scoped>
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

.container-form {
  z-index: 2;
}

.container-form .title-login {
  width: 100%;
  display: block;
  margin-bottom: 2rem;
  font-size: 48px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 800;
}
</style>