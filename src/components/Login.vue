<template>
  <v-container fluid>
    <div class="container-login">
      <div class="bg-style"></div>
      <div class="container-form">
        <h2 class="title-login">It's time to find a job !</h2>
        <v-form v-model="valid">
          <v-text-field
            class="label-login"
            label="Enter your e-mail"
            solo
            required
          ></v-text-field>
          <v-text-field
            name="passwordConnexion"
            label="Enter your password"
            hint="At least 8 characters"
            min="8"
            v-model="passwordConnexion"
            :rules="passwordRules"
            :append-icon="e3 ? 'visibility_off' : 'visibility'"
            :append-icon-cb="() => (e3 = !e3)"
            class="input-group--focused"
            :type="e3 ? 'text' : 'password'"
            solo
            color="input" 
            required
          ></v-text-field>
          <div class="wrapper-btn">
            <v-btn>
              sign in
            </v-btn>
            <span class="or">or</span>
            <v-btn color="success" @click.native="dialog=true" dark slot="activator">Sign up</v-btn>
          </div>
        </v-form>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card color="blue">
            <v-form v-model="valid" ref="form" lazy-validation>
              <h1 class="title-login">register yourself !</h1>
              <v-text-field
                label="Name"
                v-model="name"
                :rules="nameRules"
                solo
                required
              ></v-text-field>
              <v-text-field
                label="Surname"
                v-model="surname"
                :rules="surnameRules"
                solo
                required
              ></v-text-field>
              <v-text-field
                class="label-login"
                label="E-mail"
                v-model="email"
                :rules="emailRules"
                solo
                required
              ></v-text-field>
              <v-text-field
                name="passwordRegistration"
                label="Password"
                hint="At least 8 characters"
                min="8"
                v-model="passwordRegistration"
                :rules="passwordRules"
                :append-icon="e3 ? 'visibility_off' : 'visibility'"
                :append-icon-cb="() => (e3 = !e3)"
                class="input-group--focused"
                :type="e3 ? 'text' : 'password'"
                solo
                color="input" 
              ></v-text-field>
              <div class="wrapper-btn">
                <v-btn @click="submit" color="success">sign up</v-btn>
                <v-btn @click="clear" color="accent">clear</v-btn>
              </div>
            </v-form>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      surname: '',
      e3: false,
      passwordRegistration: '',
      passwordConnexion: '',
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      nameRules: [
        v => !!v || 'name is required',
      ],
      surnameRules: [
        v => !!v || 'surname is required',
      ],
      passwordRules: [
        v => !!v || 'password is required',
      ],
      checkbox: false,
      dialog: false,
      users: []
    }),

    created () {
      this.fetchUsers()
    },

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          this.$http.post('/user', {
            name: this.name,
            surname: this.surname,
            email: this.email,
            password: this.passwordRegistration
          }).then(Response => {
              console.log(Response);
              //redirect with choice/{Response.data.insertId}
              this.$router.push('/choice/'+Response.data.insertId+'')
            })
            .then(() => {
              this.dialog = false
            })
            .catch(console.error)
        }
      },

      fetchUsers () {
        this.$http.get('/user').then(res => {
          this.users = res.data
        }).catch(console.error)
      },

      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style scoped>

@keyframes translate {
  0% { opacity: 0; transform: translateY(80%); }
  100% { opacity: 1; transform: translateY(0); }
}

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

  animation: translate 1.2s ease;
  transition: all .2s ease;
}

.btn__content {
  color: black;
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

.theme--light .input-group.input-group--solo {
  margin-bottom: 1.5rem;
}

.input-group label {
  font-weight: 800;
  font-size: 22px;
  line-height: 16px;
}

.container-form .btn {
  width: 100%;
  margin: 0;
}

.wrapper-btn .btn {
  width: 47%;
  margin: 0;
}

.card form {
  padding: 2.4rem 3.6rem;
}

.card form .title-login {
  width: 100%;
  display: block;
  margin-bottom: 2rem;
  font-size: 37px;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  font-weight: 800;
}

.wrapper-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 2rem 0 0;
}

.or {
  font-size: 22px;
  color: #fff;

  margin: 0 1.2rem;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>