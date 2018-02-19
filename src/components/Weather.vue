<template>
  <main class="hello">
    <h1>Weather APP based on VueJS and weather API</h1>
    <p>Enter city</p>
    <div class="weather">
      <form action="">
        <input type="text" v-model="city" placeholder="Search for Your city...">
        <button @click="searchCity" :disabled="city.length > 0 ? false : true">Search</button>
      </form>
      <div class="places">
        <div v-for="(save, key) in saved" :key="key"  class="single-place">
          <router-link :to="{ name: 'single', params: { id: save.name } }" :key="save.id">
            <span>{{save.name}}</span>
          </router-link>
          <img v-bind:src="'http://openweathermap.org/img/w/' + save.weather[0].icon + '.png'" alt=""><br>
          <span>Current Temp: {{(save.main.temp - 273.15).toFixed(0) + '°C'}}</span>
          <p>Description: {{save.weather[0].description}}</p>
        </div>
      </div>
      <button @click="clearLocalStorage">Clear saved data</button>
    </div>
  </main>
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
  mounted(){
    console.log('App mounted!');
    if (localStorage.getItem('saved')) this.saved = JSON.parse(localStorage.getItem('saved'));
  },
  watch: {
    saved: {
      handler(){
        console.log('Saved changed');
        localStorage.setItem('saved', JSON.stringify(this.saved));
      },
      deep: true,
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
          this.weather = []
          this.city = '';
      })
    },
    remove(){
      this.saved.splice(isSaved, 1)
    },
    clearLocalStorage(){
      this.saved = []
    }
  }
}
</script>

<style scoped>

.places {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.single-place {
  border: 1px solid gray;
  flex-basis: 24%;
  margin: 10px auto;
  box-shadow: 2px 2px 2px gray;
}
.single-place button {
  float: right;
}
</style>
