<template>
  <nav class="bg-[#253B06] px-4 py-2">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Logo Section -->
      <div class="flex items-center gap-2">
        <img 
          src="/HuellasFelices.png" 
          alt="Huellas Felices Logo" 
          class="h-12 w-auto"
        />
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="toggleMobileMenu"
        class="lg:hidden text-[#FFFFFF] hover:text-[#FFCD3C] transition-colors cursor-pointer"
      >
        <Menu v-if="!isMobileMenuOpen" :size="24" />
        <X v-else :size="24" />
      </button>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center flex-1 justify-between">
        <!-- Search Bar -->
        <div class="relative flex-1 max-w-xl mx-8">
          <input
            type="text"
            placeholder="Buscar mascotas"
            class="w-full px-4 py-2 rounded-md pl-10 bg-[#FFFFFF]"
            v-model="searchQuery"
          />
          <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]" :size="20" />
        </div>

        <!-- Navigation Links -->
        <div class="flex items-center gap-6">
          <router-link 
            v-for="link in links" 
            :key="link.name"
            :to="link.path"
            class="text-[#FFFFFF] hover:text-[#FFCD3C] transition-colors"
            :class="{ 'text-[#FFCD3C]': isActive(link.path) }"
          >
            {{ link.name }}
          </router-link>

          <!-- Donate Button -->
          <router-link to="/donation" class="bg-[#FF9234] text-[#FFFFFF] px-3 py-1 rounded-full flex items-center gap-2 hover:bg-[#FFCD3C] transition-colors">
            DONA
            <Heart :size="16" />
          </router-link>

          <!-- User Menu -->
          <div class="relative" v-click-outside="closeDropdown">
            <button 
              @click="toggleDropdown"
              class="text-[#FFFFFF] hover:text-[#FFCD3C] transition-colors cursor-pointer"
            >
              <User :size="24" />
            </button>

            <!-- Dropdown Menu -->
            <div 
              v-if="isDropdownOpen"
              class="absolute right-0 mt-2 w-48 bg-[#FFFFFF] rounded-md shadow-lg py-1 z-50"
            >
              <router-link 
                v-for="link in menuItems" 
                :key="link.name"
                :to="link.path"
                class="block px-4 py-2 text-sm text-[#253B06] hover:bg-[#FAFCB4]"
                :class="{ 'bg-[#FAFCB4]': isActive(link.path) }"
              >
                {{ link.name }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-if="isMobileMenuOpen"
      class="lg:hidden fixed inset-0 bg-[#253B06] z-40 pt-20"
    >
      <div class="px-4 py-2 space-y-4">
        <!-- Close Button -->
        <button 
          @click="closeMobileMenu"
          class="absolute top-4 right-4 text-[#FFFFFF] hover:text-[#FFCD3C] hover:cursor-pointer transition-colors"
        >
          <X :size="24" />
        </button>

        <!-- Mobile Search -->
        <div class="relative">
          <input
            type="text"
            placeholder="Buscar mascotas"
            class="w-full px-4 py-2 rounded-md pl-10 bg-[#FFFFFF]"
            v-model="searchQuery"
          />
          <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]" :size="20" />
        </div>

        <!-- Mobile Navigation Links -->
        <div class="flex flex-col gap-4">
          <router-link 
            v-for="link in links" 
            :key="link.name"
            :to="link.path"
            class="text-[#FFFFFF] hover:text-[#FFCD3C] transition-colors text-lg"
            :class="{ 'text-[#FFCD3C]': isActive(link.path) }"
            @click="closeMobileMenu"
          >
            {{ link.name }}
          </router-link>

          <!-- Mobile Donate Button -->
          <router-link 
            to="/donation" 
            class="bg-[#FF9234] text-[#FFFFFF] px-3 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-[#FFCD3C] transition-colors"
            @click="closeMobileMenu"
          >
            DONA
            <Heart :size="16" />
          </router-link>

          <!-- Mobile User Menu -->
          <div class="border-t border-[#FFFFFF]/20 pt-4">
            <router-link 
              v-for="link in menuItems" 
              :key="link.name"
              :to="link.path"
              class="block py-2 text-[#FFFFFF] hover:text-[#FFCD3C] transition-colors"
              :class="{ 'text-[#FFCD3C]': isActive(link.path) }"
              @click="closeMobileMenu"
            >
              {{ link.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { Search, Heart, User, Menu, X } from 'lucide-vue-next'

const route = useRoute()

// State
const searchQuery = ref('')
const isDropdownOpen = ref(false)
const isMobileMenuOpen = ref(false)

// Dropdown menu items
const menuItems = [
  { name: 'Administrador', path: '/admin' },
  { name: 'Adoptantes', path: '/adopters' },
  { name: 'Mi Cuenta', path: '/account' },
]

const links = [
  { name: 'Inicio', path: '/' },
  { name: 'Agenda Cita', path: '/schedule' },
  { name: 'Registrarse', path: '/register' },
  { name: 'Contacto', path: '/contact' },
  { name: 'Adopta', path: '/adopt' },
]

// Methods
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const closeDropdown = () => {
  isDropdownOpen.value = false
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const isActive = (path: string) => {
  return route.path === path
}

// Cleanup on component unmount
onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Prevent scroll when mobile menu is open */
:root {
  overflow-y: auto;
}

/* Smooth transitions for mobile menu */
.fixed {
  transition: all 0.3s ease-in-out;
}

/* Optional: Add backdrop blur to mobile menu */
@supports (backdrop-filter: blur(4px)) {
  .fixed {
    backdrop-filter: blur(4px);
    background-color: rgba(37, 59, 6, 0.95);
  }
}
</style>