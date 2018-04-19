<template>
    <v-container fluid>
    <div class="container-login">
      <div class="bg-style"></div>
      <div class="container-form">
        <div class="container-card">
          <v-dialog v-model="dialog" max-width="360" light color="blue" persistent>
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
                <v-btn color="success" @click="submitUserRecruiter">finished</v-btn>
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
        dialog: true,
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
            }).catch(console.error)
        },

        submitUserRecruiter () {
            this.$http.post(this.$route.path, {
                id_user: this.$route.path.slice(18),
                id_business: this.businessModel
            }).then(res => {
                this.$router.push('/')
            }).catch(console.error)
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