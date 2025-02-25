<template>
  <div id="app" class="app-container">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Footer
  },
});
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  background-color: #f7fafc; /* Light gray background */
}

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