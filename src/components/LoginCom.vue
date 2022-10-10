<template>
    <h2 class="text-center">Login Form</h2>
    <form class="w-50 mx-auto">
        <label for="email">Email</label>
        <input
            name="email"
            type="text"
            id="email"
            class="form-control mb-3"
            @focus="changeLabel"
            v-model="email"
        />
        <label for="password">Password</label>
        <input
            name="password"
            type="password"
            id="password"
            class="form-control mb-3"
            @focus="changeLabel"
            v-model="password"
        />
        <button class="btn btn-info mt-5 text-white" @click="submit">Login</button>
    </form>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        submit(e) {
            e.preventDefault();
            axios.post(process.env.VUE_APP_API_KEY+"/api/users/login", {
                email: this.email,
                password: this.password,
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            } )
            .then( function( response ){
                localStorage.setItem('token', response.data.data.token);
                this.$router.push({name: 'blog'});
            }.bind(this))
            .catch( function( error ){

            }.bind(this));
        },
        changeLabel(e) {
            var ele = e.target.previousElementSibling;
            ele.classList.add("customLabel");
        }
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
