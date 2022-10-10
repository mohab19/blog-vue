<template>
  <div>
  
     <RegisterCom/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import RegisterCom from '@/components/RegisterCom.vue'; // @ is an alias to /src

@Options({
  components: {
    RegisterCom  },
})
export default class RegisterView extends Vue {}
</script>
