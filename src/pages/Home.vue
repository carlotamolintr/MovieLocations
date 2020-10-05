<template>
   <div >
     <b-container fluid class="background">
     <Header />
     <div no-gutters >
    <!-- <img class="logo" src="../assets/pngwing.com.png" /> -->
    <!-- <b-row><img class="" src="../assets/roll-film.png" /></b-row> -->
     <div class="d-flex first-box justify-content-center mt-5">
       <p class="">MOVIE LOCATION</p> </div>
       <div class="d-flex first-box justify-content-center mt-5"><p>Search your favourite movie locations </p></div>
    <b-row no-gutters class="d-flex first-box justify-content-center">
      <b-col class="col-4"><b-input type="text" :value="title" @input="title=$event"></b-input><b-button @click="getMovieLocations(title)">Search</b-button></b-col>
      <Movie :movies="movies" />
      <!-- <b-col class="background col-8"></b-col> -->
      <!-- <b-col class="home__CarrouselFirst my-auto col-2 pr-4 "><Carrousel /></b-col>
      <b-col class="home__CarrouselFirst my-auto col-2 pr-4"><Carrousel /></b-col>
      <b-col class="home__CarrouselFirst my-auto col-2 pr-4"><Carrousel /></b-col>
      <b-col class="home__CarrouselFirst my-auto col-2 pr-4"><Carrousel /></b-col> -->
      <!-- <b-col class=""><img class="logo" src="../assets/film1.png" /></b-col> -->
    </b-row>
    <b-row class="d-flex justify-content-end">
      <b-col class="home__Carrousel col-3"><Carrousel /></b-col>
    </b-row>
     </div>
     </b-container>
   </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Carrousel from '@/components/Carrousel'
import { mapState, mapActions } from 'vuex'
import Movie from '@/components/Movie'

export default {
  name: 'Home',
  data: () => ({
    title: ''
  }),
  components: {
    Header,
    Carrousel,
    Movie
  },
  computed: {
    ...mapState({
      movies: state => state.movies
    })
  },
  methods: {
    ...mapActions(['getMovies']),
    async getMovieLocations (title) {
      await this.getMovies(title)
    }
  }
}
</script>

<style>
.pre-formatted {
  white-space:pre-line;
}
.background {
  /* background-color: #D2D2D2; */
  background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(222,222,222,1) 50%, rgba(255,255,255,1) 100%);
  opacity: 0.8;
  background-repeat: no-repeat;
  background-position: center;
  /* background-position: center; */
  /* z-index: -1 */
}

.home__CarrouselFirst {
    background-color: none;
    /* margin: 40px 100px;
    transform: rotate(-28deg);
    z-index: 0; */
  }

/* .home__Carrousel {
  margin: 40px 40px;
} */
/* .first-box {
  height: 570px;
  justify-content: space-around;
  display: flex
} */

.logo {
  color:black;
  width: 80%;
  z-index: 2;
}
</style>
