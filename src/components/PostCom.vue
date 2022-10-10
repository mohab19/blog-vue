<template>
    <h3 class="my-4">Create Your Post: </h3>
    <form class="w-75 mx-auto my-5">
        <label for="" class="my-3" >Title</label>
        <input type="text" class="form-control" v-model="title" >
        <label for="" class="my-3">Description</label>
        <textarea class="form-control" v-model="description"></textarea>
        <button class="btn btn-info my-4 form-control" @click="submit">Create Post</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            title: "",
            description: "",
        }
    },
    methods :{
        submit(e) {
            e.preventDefault();
            fetch(process.env.VUE_APP_API_KEY+"/api/posts/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer "+localStorage.getItem('token')
                },
                body: JSON.stringify({
                    title: this.title,
                    description: this.description,
                }),
            })
            .then((res) => res.json())
            .then(this.$router.push({name: 'blog'}));
        }
    }
};
</script>

<style></style>
