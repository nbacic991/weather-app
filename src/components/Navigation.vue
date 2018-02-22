<template>
    <div v-bind:class="{active: showMobileMenu}" class="main-content">
        <div class="navigation">
          <router-link to="/">Home</router-link>
          <router-link to="/app/about">About</router-link>
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
    background-color: #355CA9;
    color: #ffffff;
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
