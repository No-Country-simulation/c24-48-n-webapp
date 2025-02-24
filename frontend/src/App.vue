<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style scoped>
nav {
  padding: 1rem;
  background-color: #f8f9fa;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: inline;
  margin-right: 1rem;
}

a {
  text-decoration: none;
  color: #42b983;
}

a.router-link-exact-active {
  font-weight: bold;
}
</style>