<template>
  <div id="app">
    <!--// must include to get full functionality-->
    <v-app>
      <page-header />
      
      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/header.vue'
export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/*.input-group--text-field input {*/
/*  border-bottom: 1px solid black;*/
/*}*/
/*body{*/
/*  border: 30px solid black;*/
/*  padding: 10px 10px 10px 10px;*/
/*  margin: 5px 5px 5px 5px;*/
/*}*/
</style>
