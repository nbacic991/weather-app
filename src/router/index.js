import Vue from 'vue'
import Router from 'vue-router'
import Weather from '@/components/Weather'
import SingleWeather from '@/components/SingleWeather'
import Forecast from '@/components/Forecast'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'weather',
      component: Weather,
      props: true
    },
    {
      path:'/:id',
      name: 'single',
      component: SingleWeather,
      props: true
    },
    {
      path: '/app/about',
      name: 'About',
      component: About,
      props: false
    }
  ]
})
