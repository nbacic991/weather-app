<template>
  <main>
    <h1>Weather APP</h1>
    <Navigation />
    <h3>Enter city</h3>
    <div class="weather">
      <form action="">
        <input type="text" v-model="city" placeholder="Search for Your city...">
        <button @click="searchCity" :disabled="city.length > 0 ? false : true">Search</button>
      </form>
      <div class="places">
        <div v-for="(save, key) in saved" :key="key"  v-bind:class="save.name.toLowerCase() + ' single-place'">
          <img v-bind:src="'http://openweathermap.org/img/w/' + save.weather[0].icon + '.png'" alt=""><br>
          <router-link :to="{ name: 'single', params: { id: save.name } }" :key="save.id">
            <p>{{save.name}}</p>
          </router-link>
          <span class="temp">{{(save.main.temp - 273.15).toFixed(0) + '°C'}}</span>
          <p>Description: {{save.weather[0].description}}</p>
          <!-- <button @click="remove(save)">x</button> -->
        </div>
      </div>
      <button @click="clearLocalStorage">Clear saved data</button>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import Vuex from 'vuex'
import Navigation from './Navigation'

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
    remove(save){
      this.saved.splice(save, key)
    },
    clearLocalStorage(){
      this.saved = []
    }
  },
  components: {
    Navigation
  }
}
</script>


<style lang="scss" scoped>
main {
  margin: 0 0 10px 0;
  h1 {
    margin-top: 0;
    color: #ffffff;
  }
  h3 {
    color: #ffffff;
  }
}
a {
  text-decoration: none;
  font-size: 24px;
  font-style: italic;
}
.temp {
  font-size: 30px;
}
img {
  width: 100px;
}
.places {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
}
.single-place {
  border: 1px solid gray;
  border-radius: 10px;
  flex-basis: 24%;
  margin: 10px auto;
  box-shadow: 2px 2px 2px gray;
  padding: 15px;
  position: relative;
  background: #90d7c9;
}
.single-place button {
  float: right;
}
@media screen and (max-width: 500px) {
  .places {
    display: block;
    padding: 10px;
  }
}
</style>
