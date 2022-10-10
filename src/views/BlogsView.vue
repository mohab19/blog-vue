<template>
    <div>
        <BlogsCom/>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import BlogsCom from '@/components/BlogsCom.vue'; // @ is an alias to /src

@Options({
    components: {
        BlogsCom
    },
})
export default class BlogView extends Vue {}
</script>
