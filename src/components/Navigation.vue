<template>
    <div v-bind:class="{active: showMobileMenu}" class="main-content">
        <div class="navigation">
          <router-link to="/">Home</router-link>
          <router-link to="/app/about">About Author</router-link>
        </div>
      <div @click="showMobileMenu = !showMobileMenu" class="mobile-menu"
          v-bind:class="{active: showMobileMenu}">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Navigation',
  data(){
      return {
          showMobileMenu: false
      }
  }
}
</script>

<style lang="scss">
.progress {
  height: 30px !important;
}
.progress-bar {
  &.html {
    background-color: #E63D0C;
  }
  &.css {
    background-color:#4A9ADE ;
  }
  &.js {
    background-color: #E9CF00;
  }
  &.vue {
    background-color: #00C781;
  }
  &.php {
    background-color: #6D6CBC;
  }
}
.about {
  display: flex;
  justify-content: space-around;
  padding: 10px 15px;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
  .content {
    padding: 10px;
    flex-basis: 45%;
    @media screen and (max-width: 768px) {
      flex-basis: 100%;
    }
    .author-img {
      border-radius: 50%;
      overflow: hidden;
      max-width: 300px;
      height: 300px;
      widows: 100%;
      position: relative;
      margin: 20px auto;
      img {
        position: absolute;
        transform: translate(-50%, -10%);
      }

    }
    .social {
      a::before {
        font-family: 'FontAwesome';
          font-size: 50px;
          color: black;
      }
      a:hover {
        &::before {
          color: rgba(0, 0, 0, 0.5);
        }
      }
      .git {
        &::before {
          content: '\f09b';
        }
      }
      .face {
        &::before {
          content: '\f082';
        }
      }
      .lin {
        &::before {
          content: '\f08c';
        }
      }
      .insta {
        &::before {
          content: '\f16d'
        }
      }
    }
  }
}
.main-content {
  &.active {
    .navigation {
      left: 0;
    }
  }
}
.control {
  max-width: 400px;
  margin: auto;
  width: 100%;
}
.mobile-menu {
  width: 40px;
  height: 45px;
  position: fixed;
  right: 10px;
  top: 50px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
  span {
    display: block;
    position: absolute;
    height: 9px;
    width: 100%;
    background: #ffffff;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
    &:nth-child(1) {
      top: 0px;
    }
    &:nth-child(2),
    &:nth-child(3) {
      top: 18px;
    }
    &:nth-child(4) {
      top: 36px;
    }
  }
  &.active {
    span {
      &:nth-child(1) {
        top: 18px;
        width: 0%;
        left: 50%;
      }
      &:nth-child(2) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      &:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
      &:nth-child(4) {
        top: 18px;
        width: 0%;
        left: 50%;
      }
    }
  }
 }
.navigation {
  z-index: 1;
  padding-top: 30px;
  transition: 300ms;
  position: fixed;
  width: 320px;
  left: -320px;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  a {
    display: block;
    padding: 10px 5px;
    text-decoration: none;
    margin: 5px;
    border-radius: 5px;
    background-color: rgb(153, 225, 247);
    color: rgb(49, 50, 51);
    outline: 0;
  }
}
form {
  margin: auto;
  input {
    width: 100% !important;
    font-size: 16px !important;
  @media (max-width: 400px) {
      max-width: 200px;
      width: 100%;
      margin: auto;
    }
  }
}
.places {
  padding: 50px 0;
  margin: auto;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .single-place {
    flex-basis: 33%;
    padding: 50px 0;
    margin: 10px;
    border: 1px solid gray;
    border-radius: 5px;
    @media (max-width: 768px) {
      flex-basis: 50%;
    }
    @media (max-width: 480px) {
      flex-basis: 100%;
    }
  }
}
* {
  box-sizing: border-box;
}
</style>
