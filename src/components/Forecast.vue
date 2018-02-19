<template>
  <div>
      <h3>Check for weather conditions for the next five days</h3>
      <p>{{(forecast.list[0].main.temp - 273.15).toFixed(2) }}</p>
      <img v-bind:src="'http://openweathermap.org/img/w/' + forecast.list[0].weather[0].icon + '.png'" alt=""><br>
      <p></p>
  </div>
</template>

<script>
import axios from 'axios'
import SingleWeather from './SingleWeather'
import moment from 'moment'

const apiKey = '9750ed0121530eff6f42450c769c6222';
export default {
    name: 'Forecast',
    props: ['id'],
    data() {
        return {
            forecast: [],
            city: this.id
        }
    },
    mounted(){
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.id}&APPID=${apiKey}`)
        .then(response => response.json())
        .then((data) => {
          this.forecast = data;
    });
    
  },
  components: {
      SingleWeather
  }

}
</script>

<style scoped>

</style>
