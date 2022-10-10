<template>
    <div>
       <PostCom/>
    </div>
  </template>
  
  <script lang="ts">
  import PostCom from '@/components/PostCom.vue';
import { Options, Vue } from 'vue-class-component';
  

  
  @Options({
    components: {
     PostCom  },
  })
  export default class PostView extends Vue {}
  </script>
  