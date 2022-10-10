<template>
    <h2 class="text-center">Registartion Form</h2>
    <form class="w-50 mx-auto">
        <label for="name">Name</label>
        <input
            type="text"
            id="name"
            class="form-control mb-3"
            @focus="changeLabel"
            v-model="name"
        />
        <label for="email">Email</label>
        <input
            type="text"
            id="email"
            class="form-control mb-3"
            @focus="changeLabel"
            v-model="email"
        />
        <label for="password">Password</label>
        <input
            type="password"
            id="password"
            class="form-control mb-3"
            @focus="changeLabel"
            v-model="password"
        />
        <label for="confirmPassword">Confirm Password</label>
        <input
            type="password"
            id="confirmPassword"
            class="form-control mb-3"
            @focus="changeLabel"
            v-model="confirmPass"
        />
        <button class="btn btn-info mt-5 text-white" @click="submit">Register</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            email: "",
            password: "",
            confirmPass: "",
        };
    },
    methods: {
        submit(e) {
            e.preventDefault();
            fetch(process.env.VUE_APP_API_KEY+"/api/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.confirmPass,
                }),
            })
            .then((res) => res.json())
            .then(console.log);
            this.$router.push("/login");
        },
        changeLabel(e) {
            var ele = e.target.previousElementSibling;
            ele.classList.add("customLabel");
        },
    }
};
</script>

<style scoped>
    input {
        border: none;
    }
    input {
        border-bottom: 1px solid #ccc;
    }
    .form-control:focus {
        box-shadow: none;
    }
    .customLabel {
        color: #0dcaf0;
        font-weight: bolder;
        margin-top: 20px;
        transition: all 0.5s ease-in;
        font-size: small;
    }
</style>
