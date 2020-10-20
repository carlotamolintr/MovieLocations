<template>
  <b-modal id="modal-location" hide-footer>
    <div class="d-flex d-col col-12">
      <Map class="map col-8" :options="filmingLocations" />
      <div class="mx-3 scroll">
        <div class="list-group" id="list-tab" v-for="(location, i) in filmingLocations" :key="i" role="tablist">
          <a class="list-group-item list-group-item-action mb-2" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">{{ location.location }}
        {{ location.remarks }}
        </a>
      </div>
      </div>
    </div>
     <h3>Hello From This Modal!</h3>
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

.scroll {
  height:380px;
  overflow-y: scroll;
}

</style>
