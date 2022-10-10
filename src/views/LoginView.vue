<template>
    <div>
    
       <LoginCom/>
    </div>
  </template>
  
  <script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import LoginCom from '@/components/LoginCom.vue'; // @ is an alias to /src
  
  @Options({
    components: {
      LoginCom  },
  })
  export default class LoginView extends Vue {}
  </script>
  