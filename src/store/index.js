import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: '',
    movies: []
  },
  mutations: {
    title (state, title) {
      state.title = title
    },
    movies (state, movies) {
      state.movies = movies
    }
  },
  actions: {
    async getMovies ({ commit }, title) {
      console.log(title, 'helouu')
      const response = await axios.get(`https://www.myapifilms.com/imdb/idIMDB?title=${title}&token=378255c2-f433-4ecb-a7f8-40bb1ab51dcc&format=json&language=en-us&aka=1&business=0&seasons=0&seasonYear=1&technical=0&filter=2&exactFilter=0&limit=1&forceYear=0&trailers=1&movieTrivia=1&awards=1&moviePhotos=0&movieVideos=0&actors=2&biography=0&actorActress=1&similarMovies=0&adultSearch=0&goofs=0&keyword=1&quotes=1&fullSize=1&companyCredits=0&filmingLocations=2`)

      commit('movies', response.data)
    }
  }
})
