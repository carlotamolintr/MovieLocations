<template>
<div>
  <div v-for="m in movies" :key="m">
      <img :src="m.urlPoster" alt="" />
      <p>{{m.title}}</p>
      <p>{{m.plot}}</p>
      <p>{{m.filmingLocations}}</p>
  </div>
  </div>

</template>

<script>
export default {
  props: {
    movies: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>
