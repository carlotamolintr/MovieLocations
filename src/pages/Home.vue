<template>
   <div id="container" class="mx-auto">
     <b-container fluid class="background">
     <Header />
     <div class="home__Carrousel"><Carrousel class="mx-auto" /></div>
     <div class="home__Searcher">
     <div class="d-flex justify-content-center mt-5">
       <p class="home__Title">MOVIE SCENES LOCATOR</p> </div>
       <div class="d-flex home__Subtitle justify-content-center mt-5"><p>Find where the film was shot </p></div>
    <b-row no-gutters class="d-flex justify-content-center">
      <b-col class="col-4"><b-input type="text" :value="title" @input="title=$event"></b-input><b-button @click="getMovieLocations(title)">Search</b-button></b-col>
    </b-row>
     </div>
     <Movie :movies="movies" />
     </b-container>
    <div style="height:400px"></div>
     <!-- <Map /> -->
   </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Carrousel from '@/components/Carrousel'
import { mapState, mapActions } from 'vuex'
import Movie from '@/components/Movie'
// import Map from '@/components/Map'

export default {
  name: 'Home',
  data: () => ({
    title: ''
  }),
  components: {
    Header,
    Carrousel,
    Movie
    // Map
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

<style lang="scss" scoped>
div #container {
  max-width: 100rem
}
.pre-formatted {
  white-space:pre-line;
}
.background {
  background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(222,222,222,1) 50%, rgba(255,255,255,1) 100%);
  background-repeat: no-repeat;
  background-position: center;
}

.home__Subtitle {
  font-family: BrandonText;
  font-weight: 700;
  font-size: 48px;
    line-height: 56px
}
.carousel {
    height: 300px;
    position: relative;

}
div.carousel-inner {
    position: absolute;
    max-height: 300px !important;
}

.home__Carrousel {
  background-color: black;
  height: 400px;
  position: relative;
}
.home__Searcher {
  color: white;
  position: absolute;
  z-index: 999999999;
  top: 300px;
  left: 50%;
  transform: translate(-50%, -50%);
}

.home__CarrouselFirst {
    background-color: none;
    /* margin: 40px 100px;
    transform: rotate(-28deg);
    z-index: 0; */
  }

.logo {
  color:black;
  width: 80%;
  z-index: 2;
}
</style>
