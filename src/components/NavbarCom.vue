<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">Blog</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link to="/blog" class="nav-link">Blog</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/post" class="nav-link">Create Post</router-link>
                </li>
            </ul>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li v-if="!loggedin" class="nav-item">
                    <router-link to="/register" class="nav-link">Register</router-link>
                </li>
                <li v-if="!loggedin" class="nav-item">
                    <router-link to="/login" class="nav-link">Login</router-link>
                </li>
                <li v-if="loggedin" class="nav-item">
                    <a class="nav-link exit" @click="logOutFun">Logout</a>
                </li>
            </ul>
        </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            loggedin: localStorage.getItem('token')
        }
    },
    methods: {
        logOutFun: function () {
            localStorage.removeItem("token");
            localStorage.removeItem("user_id");
            this.$router.push("/login");
        },
    },
};
</script>

<style scoped>
    .exit {
        cursor: pointer;
    }
</style>
