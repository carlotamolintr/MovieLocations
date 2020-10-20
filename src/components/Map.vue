<template>
  <div id="mapid" >
    <!-- <div v-for="(option, i) in options" :key="i">
    <l-map :options="option.location"></l-map>
    </div> -->
  </div>
</template>

<script>
import L from 'leaflet'
// import { LMap } from 'vue2-leaflet'
// import * as Vue2Leaflet from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'
// import * as esri from 'esri-leaflet'
import * as ELG from 'esri-leaflet-geocoder'

export default {
  components: {
    // LMap
    // esri
    // LTileLayer
    // LMarker,
  },
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getMap () {
      var mymap = L.map('mapid').setView([51.505, -0.09], 13)

      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mymap)
      // L.tileLayer(
      //   'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
      //   {
      //     maxZoom: 18,
      //     attribution:
      //       'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      //       '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      //       'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      //     id: 'mapbox.streets'
      //   }
      // ).addTo(mymap)

      const address = '380 New York St, Redlands, California, 92373'

      // const searchControl = new ELG.Geosearch().addTo(mymap)
      // const results = new L.LayerGroup()

      // searchControl.on(address, function (data) {
      //   results.clearLayers()
      //   for (let i = data.results.length - 1; i >= 0; i--) {
      //     results.addLayer(L.marker(data.results[i].latlng))
      //   }
      // })
      // console.log(searchControl, 'searhccontrol')

      // L.marker([searchControl._map._lastCenter.lat, searchControl._map._lastCenter.lng])
      //   .addTo(mymap)
      //   .bindPopup('helooou my address')
      //   .openPopup()

      ELG.geocode({
        requestParams: {
          maxLocations: 1
        }
      }).text(address)
        .run((results, response) => {
          console.log(results)
          const { lat, lng } = results.results[0].latlng
          L.marker([lat, lng])
            .addTo(mymap)
            .bindPopup(address)
            .openPopup()
        })

    //   L.marker([51.5, -0.09]).addTo(mymap)
    //     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //     .openPopup()
    }
  },
  mounted () {
    // document.getElementsByClassName('geocoder-control-input')[0].disabled = true
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
