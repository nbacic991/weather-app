<template>
    <div>
        <app-nav></app-nav>
        <h1 class="title is-1">About Author</h1>
        <p class="subtitle">Of this application</p>
        <div class="about container">
            <div class="content left">
                <div class="author-img">
                    <img src="../assets/me.jpg" alt="Nemanja Bacic weather app author">
                </div>
                <p><strong>From:</strong> Novi Sad</p>
                <p><strong>Age:</strong> 27</p>
                <p><strong>Title:</strong> Front-end web developer</p>
            </div>
            <div class="content right">
               <p>Hello, my name is Nemanja Bačić. I come from Novi Sad, where I've started my career as a front-end web developer.</p>
                <div class="social">
                    <p>You can follow my work on: </p>
                    <a class="git" target="_blank" href="https://github.com/nbacic991"></a>
                    <a class="face" target="_blank" href="https://www.facebook.com/nemanja.bacic"></a>
                    <a class="lin" target="_blank" href="https://www.linkedin.com/in/nemanja-ba%C4%8Di%C4%87-034373ba/"></a>
                    <a class="insta" target="_blank" href="https://www.instagram.com/nemanja.bacic/"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from './Navigation'

export default {
    name: 'About',
    components: {
        appNav: Navigation
    }
}
</script>

<style lang="scss" src="bulma" scoped>
</style>
