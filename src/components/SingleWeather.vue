<template>
<div class="main-content-single">
  <Navigation />
  <div v-if="weather" class="content" >
      <div class="container">
        <div class="single-place-details">
          <div v-bind:class="id.toLowerCase() + ' image'"></div>
          <p class="title is-1">{{id}}, {{weather.sys.country}}</p>
          <p>Max Tem: {{(weather.main.temp_max - 273.15).toFixed(0) + '°C'}}</p>
          <p>Max Tem: {{(weather.main.temp_min - 273.15).toFixed(0) + '°C'}}</p>
          <p>Pressure: {{weather.main.pressure + ' mb/s'}}</p>
        </div>
        <p class="title">Next 5 days</p>
        <Forecast :id=city />      
      </div>
  </div>
</div>
    
</template>

<script>
import axios from 'axios'
import Forecast from './Forecast'
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
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.id}&APPID=${apiKey}`)
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
    Navigation
  },
}
</script>

<style lang="scss">

.container {
  color: #ffffff;
  overflow: hidden;
  max-width: 1180px;
  width: 100%;
  margin: auto;
  padding: 100px 15px;
  .title {
    margin: 0;
    font-size: 38px;
  }
}
.image {
  padding: 150px 0;
  background-color: rgba(0, 0, 0, 0.3);
}
.single-place-details {
  max-width: 300px;
  width: 100%;
  float: left;
  color: #2c2c2a;
  background-color: #d8d8d7;
  padding: 0 0 10px 0;
  border-radius: 15%;
  @media (max-width: 480px) {
    float: none;
    margin: auto;
  }
}
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
