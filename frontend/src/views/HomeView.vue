<template>
  <Navbar />
  <router-view class="flex-grow" />
  <section class="relative h-1/2 w-full overflow-hidden flex flex-col">
    <!-- Background Image with Overlay -->
    <div class="relative flex-grow h-1/2">
      <img 
        src="/Rectángulo 12.png"
        alt="Perros del refugio"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <!-- Content -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="container mx-auto px-4 md:px-6">
        <div class="max-w-2xl">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            En nuestro refugio, cada rescate es un nuevo comienzo.
            Adopta, dona o comparte y deja huellas felices.
          </h1>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-[#FF9234] py-4 px-4 md:px-6 flex-shrink-0 h-1/2 flex items-center justify-center">
    <div class="container mx-auto text-center">
      <!-- Search Bar -->
      <div class="relative mb-4 inline-block w-full max-w-3xl">
        <Search class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" :size="20" />
        <input
          type="text"
          placeholder="Dale un hogar a quién más lo necesita. ¡Adoptalo aquí!"
          class="w-full pl-12 pr-10 py-3 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFCD3C]"
          v-model="searchQuery"
        />
        <button 
          v-if="searchQuery"
          @click="searchQuery = ''"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <X :size="20" />
        </button>
      </div>

      <!-- Filters -->
      <div class="flex flex-wrap gap-6 items-center justify-center">
        <div v-for="filter in filters" :key="filter.name" class="relative">
            <span
              @click="toggleFilter(filter.name)"
              class="cursor-pointer text-white hover:text-[#FAFCB4] transition-colors flex items-center gap-1"
              :class="{ 'text-[#FAFCB4]': activeFilter === filter.name }"
            >
              {{ filter.name }}
              <ChevronDown 
                :size="16" 
                :class="{ 'transform rotate-180': activeFilter === filter.name }"
                class="transition-transform duration-200"
              />
            </span>

          <!-- Dropdown -->
          <div
            v-if="activeFilter === filter.name"
            class="absolute z-50 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 max-h-60 overflow-y-auto"
            v-click-outside="() => closeFilter(filter.name)"
          >
            <label 
              v-for="option in filter.options" 
              :key="option"
              class="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <input
                type="checkbox"
                :value="option"
                v-model="selectedFilters[filter.name]"
                class="rounded border-gray-300 text-[#FF9234] focus:ring-[#FF9234]"
              />
              <span class="ml-2">{{ option }}</span>
            </label>
          </div>
        </div>

        <!-- Clear Filters Button -->
        <button
          @click="clearFilters"
          class="px-4 py-2 bg-white rounded-full hover:bg-[#FAFCB4] transition-colors flex items-center gap-2"
          :class="{ 'opacity-50 cursor-not-allowed': !hasActiveFilters }"
          :disabled="!hasActiveFilters"
        >
          Borrar filtros
          <Trash2 :size="16" />
        </button>
      </div>
    </div>
  </section>
  <section>
    <div class="container mx-auto">
      <PetList />
    </div>
  </section>
  <Footer />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Search, X, ChevronDown, Trash2 } from 'lucide-vue-next'
import PetList from '@/components/PetList.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

const searchQuery = ref('')
const activeFilter = ref('')

const filters = [
  {
    name: 'Tamaño',
    options: ['Pequeño', 'Mediano', 'Grande']
  },
  {
    name: 'Especie',
    options: ['Perro', 'Gato']
  },
  {
    name: 'Sexo',
    options: ['Macho', 'Hembra']
  },
  {
    name: 'Edad',
    options: ['Cachorro', 'Joven', 'Adulto', 'Senior']
  },
  {
    name: 'Estado',
    options: ['Disponible', 'En proceso', 'Adoptado']
  },
]

const selectedFilters = ref<Record<string, string[]>>({})

// Initialize selectedFilters with empty arrays for each filter
filters.forEach(filter => {
  selectedFilters.value[filter.name] = []
})

const hasActiveFilters = computed(() => {
  return Object.values(selectedFilters.value).some(filterArray => filterArray.length > 0) || searchQuery.value !== ''
})

const toggleFilter = (filterName: string) => {
  activeFilter.value = activeFilter.value === filterName ? '' : filterName
}

const closeFilter = (filterName: string) => {
  if (activeFilter.value === filterName) {
    activeFilter.value = ''
  }
}

const clearFilters = () => {
  searchQuery.value = ''
  Object.keys(selectedFilters.value).forEach(key => {
    selectedFilters.value[key] = []
  })

}
</script>

<style scoped>
/* Scrollbar styling for filter dropdowns */
.max-h-60::-webkit-scrollbar {
  width: 8px;
}

.max-h-60::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.max-h-60::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.max-h-60::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>