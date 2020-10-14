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
      <button @click="getLocations(i)"> see locations</button>
  </div>
  <!-- <Map /> -->
  </div>

</template>

<script>
// import Map from '@/components/Map'
// import Modal from '@/components/Modal'
export default {
  data: () => ({
    show: false
  }),
  components: {
    // Modal
    // Map
  },
  props: {
    movies: {
      type: Array,
      required: true
    }
  },
  methods: {
    getLocations (x) {
      $('#myModal').modal('show')
      // abrir un modal
      // Passando el indice
    }
  }
}
</script>

<style scoped>
.image {
  height: fit-content;
}

.plot {
  text-align: justify;
  display: flex;
}
</style>
