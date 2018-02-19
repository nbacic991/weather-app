<template>
    <div v-if="weather">
        <h1>{{id}}, {{weather.sys.country}}</h1>
        <span>Max Tem: {{weather.main.temp_max - 273.15 + '°C'}}</span>
        <span>Max Tem: {{weather.main.temp_min - 273.15 + '°C'}}</span>
        <p>Pressure: {{weather.main.pressure + ' mb/s'}}</p>
        <p>Lat: {{weather.coord.lat}}</p>
        <p>Long: {{weather.coord.lon}}</p>
        <Forecast :id=city></Forecast>
        <router-link to='/'>
          <button>Go back</button>
        </router-link>
    </div>
</template>

<script>
import axios from 'axios'
import Forecast from './Forecast'

const apiKey = '9750ed0121530eff6f42450c769c6222';
export default {
  props: ['id'],
  data () {
    return {
      weather: [],
      city: this.id
    }
  },
  mounted(){
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.id}&APPID=${apiKey}`)
        .then(response => response.json())
        .then((data) => {
          this.weather = data;
    });
  },
  beforeMount(){
      this.weather = this.weather;
  },
  components: {
    Forecast
  },
}
</script>

<style>

</style>
