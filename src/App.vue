<template>
  <div id="app">
    <menu-component></menu-component>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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
.content {
  text-align: left;
  margin: 0 auto;
  width: 1000px;
  background-color: #A2B964;
  padding: 1em;
  border-radius: 25px;
}
a:visited{
  /*color: #595F23;*/
}
</style>
