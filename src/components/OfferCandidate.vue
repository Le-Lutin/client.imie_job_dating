<template>
      <v-container fluid>
    <div class="container-login">
      <div class="bg-style">
          <v-card>
        <v-list>
          <v-list-tile avatar v-for="candidate in candidates" :key="candidate.id_candidate" >
            <v-list-tile-content>
                  <div class="candidate-tile">
                      <div class="candidate-component">{{candidate.id_candidate}}</div>
                      <div class="candidate-component">{{candidate.name}} {{candidate.surname}}</div>
                      <div class="candidate-component">{{candidate.skill_connus}}/{{candidate.skill_demandés}} compétences</div>
                  </div>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
          </v-card>
      </div>
    </div>
  </v-container>
</template>


<script>
export default {
    data () {
      return {
        candidates:[]
      }
    },
    methods:{
        fetchOfferCandidates(){
            this.$http.get('/offer-candidates/'+this.$route.path.slice(18)+'').then(res=>{
                this.candidates = res.data
            }).catch(console.error)
        }
    },
    created(){
        this.fetchOfferCandidates()
    }
}
</script>


<style>
.candidate-tile{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:100%;
}
.candidate-component{
    width:33%;
    text-align: center;
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