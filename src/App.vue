<!--
 * @Author: YiY
 * @Date: 2023-10-06 16:55:30
 * @LastEditTime: 2023-10-08 08:47:06
-->
<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/set">Set</router-link> |
      <router-link to="/routes">Routes</router-link> |
      <router-link to="/table">Table</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
