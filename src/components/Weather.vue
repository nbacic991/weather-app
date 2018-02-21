<template>
  <main>
    <h1 class="title is-1">Weather APP</h1>
    <Navigation />
    <p class="subtitle is-4">Enter city</p>
    <div class="weather">
      <form action="">
        <div class="field">
          <div class="control">
            <input type="text" v-model="city" class="input is-rounded" placeholder="Search for Your city...">
          </div>
        </div>
        <button class="button is-primary is-rounded"  @click="searchCity" :disabled="city.length > 0 ? false : true">Search</button>
      </form>
      <div class="places fix">
        <div v-for="(save, key) in saved" :key="key"  class="single-place">
          <router-link :to="{ name: 'single', params: { id: save.name } }" :key="save.id">
            <p class="title is-2">{{save.name}}</p>
          </router-link>
          <img v-bind:src="'http://openweathermap.org/img/w/' + save.weather[0].icon + '.png'" v-bind:alt="save.weather[0].icon">
          <p class="title is-1">{{(save.main.temp - 273.15).toFixed(0) + '°C'}}</p>
          <!-- <button @click="remove(save)">x</button> -->
        </div>
      </div>
      <button class="button is-primary is-rounded" @click="clearLocalStorage">Clear saved data</button>
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


<style lang="scss" src="bulma" scoped>
/**
 *  Default settings
 */

</style>
