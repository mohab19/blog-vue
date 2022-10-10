<template>
    <div class="row">
        <div class="offset-md-2 col-md-8">
            <div v-for="(item, index) in allBlogs" :key="index" class="item p-3">
                <h4> {{item.title}} </h4>
                <p> {{item.description}} </p>
                <h6 class="d-block text-start">Publish At: {{item.publication_date}}</h6>
                <h6 class="h6 text-start">Publish By: {{item.user}}</h6>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            allBlogs:[]
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
                console.log(response.data.data[0]);
                this.allBlogs = response.data.data[0];
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

<style>
    .item {
        margin-bottom: 50px;
    }
    .item h4 {
        border-left: 6px solid red;
        padding: 5px 25px;
        margin-bottom: 20px;
    }
    .item p,
    .item h6 {
        padding-left: 31px;
    }
</style>
