<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo Section -->
      <div class="logo-container">
        <img 
          src="/HuellasFelices.png" 
          alt="Huellas Felices Logo" 
          class="logo"
        />
      </div>

      <!-- Search Bar -->
      <div class="search-container">
        <input
          type="text"
          placeholder="Buscar mascotas"
          class="search-input"
          v-model="searchQuery"
        />
        <Search class="search-icon" :size="20" />
      </div>

      <!-- Navigation Links -->
      <div class="nav-links">
        <router-link 
          v-for="link in links" 
          :key="link.name"
          :to="link.path"
          class="nav-link"
        >
          {{ link.name }}
        </router-link>

        <!-- Donate Button -->
        <router-link to="/donation" class="donate-button">
          DONA
          <Heart :size="16" />
        </router-link>

        <!-- User Menu -->
        <div class="user-menu" v-click-outside="closeDropdown">
          <button 
            @click="toggleDropdown"
            class="user-menu-button"
          >
            <User :size="24" />
          </button>

          <!-- Dropdown Menu -->
          <div 
            v-if="isDropdownOpen"
            class="dropdown-menu"
          >
          <router-link 
            v-for="link in menuItems" 
            :key="link.name"
            :to="link.path"
            class="dropdown-item"
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
import { ref } from 'vue'
import { Search, Heart, User } from 'lucide-vue-next'

// State
const searchQuery = ref('')
const isDropdownOpen = ref(false)

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

</script>

<style scoped>
.navbar {
  background-color: #253B06;
  padding: 0.5rem 1rem;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo {
  height: 3rem;
  width: auto;
}

.search-container {
  position: relative;
  flex: 1;
  max-width: 36rem;
  margin: 0 2rem;
}

.search-input {
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border-radius: 0.375rem;
  border: none;
  background-color: #FFFFFF;
}

.search-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #BDBDBD;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  color: #FFFFFF;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover, .nav-link.router-link-active {
  color: #FFCD3C;
}

.donate-button {
  background-color: #FF9234;
  color: #FFFFFF;
  padding: 0.3rem 1rem;
  text-decoration: none;
  border-radius: 1rem;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.donate-button:hover {
  background-color: #e58129;
}

.user-menu {
  position: relative;
}

.user-menu-button {
  color: #FFFFFF;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
}

.user-menu-button:hover {
  color: #FFCD3C;
}

.dropdown-menu {
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 0.5rem;
  width: 12rem;
  background-color: #FFFFFF;
  border-radius: 0.375rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  overflow: hidden;
}

.dropdown-item {
  display: block;
  padding: 0.5rem 1rem;
  color: #253B06;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.dropdown-item:hover {
  background-color: #FAFCB4;
}

@media (max-width: 768px) {
  .navbar-container {
    flex-direction: column;
    align-items: stretch;
  }

  .search-container {
    margin: 1rem 0;
  }

  .nav-links {
    flex-direction: column;
    align-items: stretch;
  }

  .nav-link, .donate-button {
    text-align: center;
    padding: 0.5rem;
  }

  .user-menu {
    margin-top: 1rem;
  }
}
</style>