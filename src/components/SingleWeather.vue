<template>
<div class="main-content-single">
  <Navigation />
  <div v-if="weather" class="content" v-bind:class="id.toLowerCase()">
      <div class="container">
        <h1>{{id}}, {{weather.sys.country}}</h1>
        <p>Max Tem:  <icon color="red" name="caret-up"></icon> {{(weather.main.temp_max - 273.15).toFixed(0) + '°C'}}</p>
        <p>Max Tem: <icon color="lightblue" name="caret-down"></icon> {{(weather.main.temp_min - 273.15).toFixed(0) + '°C'}}</p>
        <p>Pressure: {{weather.main.pressure + ' mb/s'}}</p>
        <Forecast :id=city></Forecast>      
      </div>
  </div>
</div>
    
</template>

<script>
import axios from 'axios'
import Forecast from './Forecast'
import Icon from 'vue-awesome/components/Icon'
import Navigation from './Navigation'

const apiKey = '9750ed0121530eff6f42450c769c6222';
export default {
  props: ['id'],
  data () {
    return {
      weather: [],
      city: this.id,
    }
  },
  mounted(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.id}&APPID=${apiKey}`)
      .then(response => response.json())
      .then((data) => {
        this.weather = data;
    });
  },
  methods: {
    
  },
  beforeMount(){
      this.weather = this.weather;
  },
  components: {
    Forecast,
    Icon,
    Navigation
  },
}
</script>

<style lang="scss">

.container {
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 200px 0;
}
/**
 * Mobile menu
 */

/**
 * Cities
 **/
.subotica {
  background: url('../assets/subotica.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.novi.sad {
  background: url('../assets/novi-sad.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.london {
  background: url('../assets/london.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
