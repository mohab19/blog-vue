
<template>
  <NavbarCom/>
  <div class="container my-5">
    
      
      
      <router-view></router-view>
   
  </div>
</template>

<script>

import NavbarCom from './components/NavbarCom.vue';


export default {
  name: "App",
  components: {
   
    NavbarCom
  },
  data() {
    return {
     
    };
  },
};
</script>

<style>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
