import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// function parseMovies (movies) {
//   console.log(movies)
//   return {
// title: movies.title
// year: movies.map(m => m.year),
// director: movies.map(m => m.directors)[0].name || [],
// filmingLocations: [
//   movies[0].filmingLocations.map(m => ({
//     location: m.location,
//     remarks: m.remarks
//   }))
// ]

//   }
// }

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
      const response = await axios.get(`https://www.myapifilms.com/imdb/idIMDB?title=${title}&token=378255c2-f433-4ecb-a7f8-40bb1ab51dcc&format=json&language=en-us&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=2&exactFilter=0&limit=3&forceYear=0&trailers=0&movieTrivia=0&awards=0&moviePhotos=0&movieVideos=0&actors=0&biography=0&uniqueName=0&filmography=0&bornAndDead=0&starSign=0&actorActress=0&actorTrivia=0&similarMovies=0&adultSearch=0&goofs=0&keyword=0&quotes=0&fullSize=0&companyCredits=0&filmingLocations=2`)

      commit('movies', response.data.data.movies)
    },

    cleanUp ({ commit }) {
      commit('movies', [])
    }
  }
})
