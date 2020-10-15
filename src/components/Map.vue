<template>
  <div id="mapid" ></div>
</template>

<script>
import L from 'leaflet'
// import { LTileLayer } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  components: {
    // LMap,
    // LTileLayer
    // LMarker,
  },
  methods: {
    getMap () {
      var map = L.map('mapid').setView([51.505, -0.09], 13)

      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)

    //   L.marker([51.5, -0.09]).addTo(map)
    //     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //     .openPopup()
    }
  },
  mounted () {
    this.getMap()
  }
}
</script>

<style scoped>

#mapid {
   height: 380px
}

/* .leaflet-popup-content {
    width: 200px;
  }
  .popupText {
    width: 100%; */
  /* } */

</style>
