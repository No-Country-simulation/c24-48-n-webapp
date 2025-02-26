<template>
  <div id="app" class="min-h-screen bg-[#F7FAFC] flex flex-col">
    
    <router-view class="flex-grow" />
    
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