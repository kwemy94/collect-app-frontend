<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <HomeCollect info="SSolution Kollect" />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HomeCollect from './components/HomeCollect.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    HomeCollect
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
