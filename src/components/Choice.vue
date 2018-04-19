<template>
  <v-container fluid>
    <div class="container-login">
      <div class="bg-style"></div>
      <div class="container-form">
        <h2 class="title-login">Who are you ?</h2>
        <div class="container-card">
          <v-layout>
            <v-card width="280px">
              <v-card class="card-content" color="blue" height="160px">
                <v-icon color="primary" size="80px">face</v-icon>
              </v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Candidate</h3>
                  <div>You want find an business ? It's your time, consult offers and contact recruiter. Good luck man !</div>
                  <v-btn color="success" @click="submitUserCandidate">Choose</v-btn>
                </div>
              </v-card-title>
            </v-card>
          </v-layout>
          <v-layout>
            <v-card width="280px">
              <v-card class="card-content" color="blue" height="160px">
                <v-icon color="primary" size="80px">work</v-icon>
              </v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Recruiter</h3>
                  <div>You want to find your nugget ? Write an offer and consult candidate and contact them. Good luck man !</div>
                  <v-btn color="success" @click.native.stop="dialog = true">Choose</v-btn>
                </div>
              </v-card-title>
            </v-card>
          </v-layout>
          <v-dialog v-model="dialog" max-width="360" light color="blue">
            <v-card color="blue">
              <v-card-title class="headline">You are recruiter ? So, choose your business !</v-card-title>
              <v-select
                autocomplete
                label="Business"
                :items="this.business"
                v-model="businessModel"
                item-value="id_business"
                item-text="name"
                solo
              ></v-select>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success">finished</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        valid: true,
        businessModel: '',
        businessRules: [
          v => !!v || 'business is required',
        ],
        business: []
      }
    },

    created () {
      this.fetchBusiness()
    },
    
    methods: {
      fetchBusiness () {
        this.$http.get('/business').then(res => {
          this.business = res.data
          console.log(this.business)
        }).catch(console.error)
      },

      submitUserCandidate () {
        this.$http.post(this.$route.path).then(res => {
          console.log('cool')
        }).catch(console.error)
      }
    }
  }
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
  text-align: center;
}

.container-card {
  display: flex;
  width: 622px;
  justify-content: space-between;
}

.container-card .card-content {
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
}

.card__title .btn {
  width: 100%;
  margin: 1rem 0 0;
}

.dialog .card {
  padding: 3rem;
}

.dialog .card .headline{
  padding: 0;
  color: #fff;
  padding-bottom: 2rem;
}

.card__actions {
  padding: 0;
}

.card__actions > * {
  margin: 0;
}

.card__actions .btn {
  width: 100%;
  margin: .5rem 0 0;
}

.card__title--primary {
  padding-top: 16px;
}
</style>