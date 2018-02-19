<template>
  <div class="hello">
    <h1>Weather APP based on VueJS and weather API</h1>
    <div class="weather">
      <p>Enter city</p>
      <form action="">
        <input type="text" v-model="city" placeholder="Search for Your city...">
        <button @click="searchCity" :disabled="city.length > 0 ? false : true ">Search</button>
      </form>
      <div>
         <div v-if="!isHidden" v-for="(isSaved, key) in saved" :key="key" class="weather-conditions">
            <button @click="saved.splice(key, 1)">X</button>
            <router-link :to="{ name: 'single', params: { id: isSaved.name } }" :key="isSaved.id">
            <p>{{isSaved.name}}</p>
            </router-link>
            <span>Current Temp: {{isSaved.main.temp - 273.15 + '°'}}</span>
            <p>Description: {{isSaved.weather[0].description}}</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vuex from 'vuex'

const apiKey = '9750ed0121530eff6f42450c769c6222';
export default {
  data () {
    return {
      weather: [],
      city: '',
      isHidden: true,
      saved: []
    }
  },
  methods: {
    searchCity(){
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${apiKey}`)
        .then(response => response.json())
        .then((data) => {
          this.weather = data;
          this.isHidden = false;
          this.saved.push(this.weather);
          this.city = '';
          this.weather = []
      })
    },
    remove(){
      this.saved.splice(isSaved, 1)
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.weather-conditions {
  border: 1px solid gray;
  width: 50%;
  margin: 10px auto;
  box-shadow: 2px 2px 2px gray;
}
.weather-conditions button {
  float: right;
}
</style>
