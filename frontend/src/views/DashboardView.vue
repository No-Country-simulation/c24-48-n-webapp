<template>
    <div class="min-h-screen bg-gray-100">
      <!-- Sidebar -->
      <aside class="fixed inset-y-0 left-0 w-64 bg-[#253B06] text-white">
        <!-- Logo -->
        <div class="p-4">
          <img 
            src="/HuellasFelices.png" 
            alt="Huellas Felices"
            class="h-12"
          />
        </div>
  
        <!-- Search -->
        <div class="px-4 mb-4">
          <div class="relative">
            <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" :size="16" />
            <input
              type="text"
              placeholder="Buscar mascotas"
              class="w-full pl-10 pr-4 py-2 text-sm bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9234] text-white placeholder-gray-400"
            />
          </div>
        </div>
  
        <!-- Navigation -->
        <nav class="space-y-1 px-2">
          <router-link
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.path"
            class="flex items-center px-2 py-2 text-sm rounded-md transition-colors"
            :class="[
              route.path === item.path
                ? 'bg-white/10 text-white'
                : 'text-gray-300 hover:bg-white/5 hover:text-white'
            ]"
          >
            <component :is="item.icon" class="mr-3 h-5 w-5" />
            {{ item.name }}
            <ChevronDown 
              v-if="item.hasSubmenu"
              class="ml-auto h-4 w-4"
              :class="{ 'transform rotate-180': item.isOpen }"
            />
          </router-link>
        </nav>
      </aside>
  
      <!-- Main Content -->
      <main class="pl-64">
        <!-- Header -->
        <header class="bg-white shadow">
          <div class="flex justify-between items-center px-6 py-4">
            <h1 class="text-2xl font-semibold text-gray-900">Gestión de animales</h1>
            <a
                href="/pets/add"
                @click.prevent="openAddPetModal"
                class="inline-flex items-center px-4 py-2 bg-[#FF9234] text-white rounded-md hover:bg-[#ff8010] transition-colors"
                >
                <Plus class="h-5 w-5 mr-2" />
                Agregar Mascota
            </a>
          </div>
        </header>
  
        <!-- Pet Grid -->
        <div class="p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="pet in pets"
              :key="pet.id"
              class="bg-white rounded-lg shadow overflow-hidden"
            >
              <img 
                :src="pet.image" 
                :alt="pet.name"
                class="w-full h-48 object-cover"
              />
              <div class="p-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900">{{ pet.name }}</h3>
                    <p class="text-sm text-gray-500">{{ pet.type }}, {{ pet.age }}</p>
                  </div>
                  <span 
                    class="px-2 py-1 text-xs rounded-full"
                    :class="getStatusClass(pet.status)"
                  >
                    {{ pet.status }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { 
    Home,
    PawPrint,
    Calendar,
    Heart,
    DollarSign,
    Bell,
    Settings,
    Search,
    Plus,
    ChevronDown
  } from 'lucide-vue-next'
  
  const route = useRoute()
  
  const navigationItems = [
    { name: 'Inicio', path: '/dashboard', icon: Home },
    { name: 'Gestión de animales', path: '/pets', icon: PawPrint },
    { name: 'Citas programadas', path: '/appointments', icon: Calendar },
    { 
      name: 'Adopciones', 
      path: '/adoptions', 
      icon: Heart,
      hasSubmenu: true,
      isOpen: false,
      submenu: [
        { name: 'Seguimiento', path: '/adoptions/tracking' },
        { name: 'Documentación', path: '/adoptions/documents' },
        { name: 'Contacto con adoptantes', path: '/adoptions/contacts' }
      ]
    },
    { name: 'Donaciones', path: '/donations', icon: DollarSign },
    { name: 'Notificaciones', path: '/notifications', icon: Bell },
    { name: 'Configuración', path: '/settings', icon: Settings }
  ]
  
  const pets = ref([
    {
      id: 1,
      name: 'Piti',
      type: 'Gato',
      age: '2 años',
      status: 'En adopción',
      image: '/pets/piti.jpg'
    },
    {
      id: 2,
      name: 'Tango',
      type: 'Perro',
      age: '3 años',
      status: 'Adoptado',
      image: '/pets/tango.jpg'
    },
    {
      id: 3,
      name: 'Coco',
      type: 'Perro',
      age: '1 año',
      status: 'En tratamiento',
      image: '/pets/coco.jpg'
    },
    {
      id: 4,
      name: 'Rocky',
      type: 'Perro',
      age: '2 años',
      status: 'En adopción',
      image: '/pets/rocky.jpg'
    }
  ])
  
  const getStatusClass = (status: string) => {
    const classes = {
      'En adopción': 'bg-blue-100 text-blue-800',
      'Adoptado': 'bg-green-100 text-green-800',
      'En tratamiento': 'bg-yellow-100 text-yellow-800'
    }
    return classes[status as keyof typeof classes] || 'bg-gray-100 text-gray-800'
  }
  
  const openAddPetModal = () => {
    // Implementar lógica para abrir modal de agregar mascota
    console.log('Abrir modal de agregar mascota')
  }
  </script>