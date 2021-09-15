<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <!-- <Haiwen></Haiwen>  -->
    <!-- <Afeng></Afeng> -->
    <!-- <router-link to="afeng">阿峰</router-link>
    <router-link to="haiwen">海文</router-link> -->
      <router-view/>
  </div>

</template>

<script>
// import Haiwen from './views/Haiwen.vue'
// import Afeng from './views/Afeng.vue'

 
export default {
  // name:"App",
  components:{
    // Haiwen,
    // Afeng,
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
}



#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
