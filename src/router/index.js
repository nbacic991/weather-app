import Vue from 'vue'
import Router from 'vue-router'
import Weather from '@/components/Weather'
import SingleWeather from '@/components/SingleWeather'
import Forecast from '@/components/Forecast'

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
      path:'/:id',
      name: 'forecast',
      component: Forecast,
      props: true
    }
  ]
})
