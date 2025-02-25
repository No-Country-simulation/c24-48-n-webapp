<template>
  <footer class="bg-[#FFFFFF] py-8 mt-auto">
    <div class="max-w-7xl mx-auto flex flex-col items-center gap-8">
      <!-- Logo -->
      <div class="flex justify-center">
        <img 
          src="/HuellasFelices.png"
          alt="Huellas Felices Logo" 
          class="h-36 w-auto md:h-24"
        />
      </div>

      <!-- Social Media Links -->
      <div class="flex gap-4 justify-center">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="w-12 h-12 bg-[#253B06] rounded-full flex items-center justify-center text-[#FFFFFF] transition-all hover:bg-[#FF9234] hover:-translate-y-1">
          <Instagram :size="24" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="w-12 h-12 bg-[#253B06] rounded-full flex items-center justify-center text-[#FFFFFF] transition-all hover:bg-[#FF9234] hover:-translate-y-1">
          <Facebook :size="24" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="w-12 h-12 bg-[#253B06] rounded-full flex items-center justify-center text-[#FFFFFF] transition-all hover:bg-[#FF9234] hover:-translate-y-1">
          <Youtube :size="24" />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="w-12 h-12 bg-[#253B06] rounded-full flex items-center justify-center text-[#FFFFFF] transition-all hover:bg-[#FF9234] hover:-translate-y-1">
          <Twitter :size="24" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Instagram, Facebook, Youtube, Twitter } from 'lucide-vue-next'

</script>