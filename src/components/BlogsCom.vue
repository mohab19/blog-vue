<template>
    <div class="row">
        <div class="offset-md-3 col-md-6">
            <div :v-for="blog in allBlog" class="item bg-info text-white text-center rounded-4 p-3">
                <h4> {{blog.title}} </h4>
                <p> {{blog.description}} </p>
                <span class="d-block text-start">publish at</span>
                <h5 class="h6 text-start">publish By</h5>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            allBlog:[]
        };
    },
    methods: {
        get_posts() {
            axios
            .get(process.env.VUE_APP_API_KEY+"/api/posts/get", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer "+localStorage.getItem('token')
                }
            })
            .then((response) => {
                console.log(response.data);
                this.allBlog = response.data;
            }).catch((error) => {
                console.log(error);
            });
        }
    },
    mounted()
    {
        this.get_posts();
    }
}
</script>

<style></style>
