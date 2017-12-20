<template>
  <v-layout column> 
    <v-flex xs6 offset-xs3>
      <h1>Login</h1>
        <form 
          name="tab-tracker-form"
          autocomplete="off">
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
        </form>
        <br>
        <div class="danger-alert" v-html="error" />
        <br>
        <v-btn
          dark
          class="cyan"
          @click="login">
          Login
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>



<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  // watch: {
  //   email (value) {
  //     console.log('email', value)
  //   }
  // },
  methods: {
    async login () {
      try {
        var response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        // error.response.data is from axios error //error is message we have defined
        this.error = (error.response.data.error)
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color: red;
}

h1{
  font-size:50px;
  font-style: oblique;
}

</style>
