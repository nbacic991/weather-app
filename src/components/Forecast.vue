<template>
<section class="days">
    <div class="day">
        {{forecast.list[0].dt | formatUnix}}
            <p>{{(forecast.list[0].main.temp_max - 273.15).toFixed(0) + '°C'}}
              / {{(forecast.list[0].main.temp_min - 273.15).toFixed(0) + '°C'}}
            </p>
            <p>Wind speed: {{forecast.list[0].wind.speed + 'm/s'}}</p>
            <p>Humidity: {{forecast.list[0].main.humidity + '%'}}</p>
        </div>
        <div class="day">
            {{forecast.list[3].dt | formatUnix}}
            <p>{{(forecast.list[3].main.temp_max - 273.15).toFixed(0) + '°C'}}
                / {{(forecast.list[3].main.temp_min - 273.15).toFixed(0) + '°C'}}
            </p>
            <p>Wind speed: {{forecast.list[3].wind.speed + 'm/s'}}</p>
            <p>Humidity: {{forecast.list[3].main.humidity + '%'}}</p>
        </div>
        <div class="day">
              {{forecast.list[11].dt | formatUnix}}
              <p>{{(forecast.list[11].main.temp_max - 273.15).toFixed(0) + '°C'}}
                  / {{(forecast.list[11].main.temp_min - 273.15).toFixed(0) + '°C'}}
              </p>
              <p>Wind speed: {{forecast.list[11].wind.speed + 'm/s'}}</p>
              <p>Humidity: {{forecast.list[11].main.humidity + '%'}}</p>
          </div>
          <div class="day">
              {{forecast.list[19].dt | formatUnix}}
              <p>{{(forecast.list[19].main.temp_max - 273.15).toFixed(0) + '°C'}}
                  / {{(forecast.list[19].main.temp_min - 273.15).toFixed(0) + '°C'}}
              </p>
              <p>Wind speed: {{forecast.list[19].wind.speed + 'm/s'}}</p>
              <p>Humidity: {{forecast.list[19].main.humidity + '%'}}</p>
          </div>
          <div class="day">
              {{forecast.list[28].dt | formatUnix}}
              <p>{{(forecast.list[28].main.temp_max - 273.15).toFixed(0) + '°C'}}
                  / {{(forecast.list[28].main.temp_min - 273.15).toFixed(0) + '°C'}}
              </p>
              <p>Wind speed: {{forecast.list[28].wind.speed + 'm/s'}}</p>
              <p>Humidity: {{forecast.list[28].main.humidity + '%'}}</p>
          </div>
      </section>
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
    filters: {
        formatUnix(value){
            if (value) {
                return moment.unix(value).format('dddd');
            }
        }
    },
    components: {
        SingleWeather
    }

}
</script>

<style lang="scss" scoped>
.days {
    padding-left: 20px;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .day {
        flex-basis: 20%;
        padding: 10px 0;
        text-align: center;
        p {
            margin: 2px 0;
        }
        @media (max-width: 768px) {
            flex-basis: 50%;
        }
        @media (max-width: 480px) {
            flex-basis: 100%;
        }
    }
}
</style>
