<template>
  <b-modal id="modal-location" hide-footer>
    <div class="d-block text-center">
      <div v-for="(location, i) in filmingLocations" :key="i">
        <p>{{location}}</p>
      </div>
      <Map class="map" />
      <h3>Hello From This Modal!</h3>
    </div>
    <!-- <b-button class="mt-3" block @click="$bvModal.hide('modal-location')">Close Me</b-button> -->
  </b-modal>
</template>

<script>
import Map from '@/components/Map'

export default {
  components: {
    Map
  },
  props: {
    filmingLocations: {
      type: Array,
      default: () => []
    }
  }

}
</script>

<style lang="scss" scoped>

::v-deep .modal-md {
  min-width: 700px !important;
}

</style>
