<template>
<div>
  <div v-for="(m, i) in movies" class="col-6 my-5" :key="i">
    <button>see all locations</button>
     <p>Title: {{m.title}}</p>
     <div class="d-flex">
        <img class="image" :src="m.urlPoster" alt="" />
        <p class="pl-3 plot">Summary: {{m.plot}}</p>
      </div>
      <p>{{m.filmingLocations}}</p>
      <button @click="showModal(i)"> see locations</button>
  </div>
  <Modal :filming-locations="data" />
  <!-- <Map /> -->
  </div>

</template>

<script>
// import Map from '@/components/Map'
import Modal from '@/components/Modal'
export default {
  data: () => ({
    show: false,
    data: null
  }),
  components: {
    Modal
    // Map
  },
  props: {
    movies: {
      type: Array,
      required: true
    }
  },
  methods: {
    showModal (x) {
      console.log(x)
      this.data = this.movies[x].filmingLocations
      this.$bvModal.show('modal-location')
      // $('#myModal').modal('show')
      // abrir un modal
      // Passando el indice
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  height: fit-content;
}

.plot {
  text-align: justify;
  display: flex;
}

</style>
