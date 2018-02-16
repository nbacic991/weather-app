import Vue from 'vue'
import Router from 'vue-router'
import Weather from '@/components/Weather'
import SingleWeather from '@/components/SingleWeather'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'weather',
      component: Weather,
    },
    {
      path:'/:id',
      name: 'single',
      component: SingleWeather,
      props: true
    }
  ]
})
