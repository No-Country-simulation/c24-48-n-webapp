<template>
    <div 
      class="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 m-3"
      @click="$emit('click')"
    >
      <!-- Image Container -->
      <div class="relative aspect-square">
        <img 
          :src="pet.image" 
          :alt="pet.name"
          class="w-full h-full object-cover"
        />
      </div>
  
      <!-- Pet Info -->
      <div class="p-4">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-gray-800">{{ pet.name }}</h3>
          <span class="text-[#FF9234]">
            <component :is="speciesIcon" :size="20" />
          </span>
        </div>
        
        <!-- Additional Info (opcional) -->
        <div class="mt-2 flex items-center gap-2 text-sm text-gray-600">
          <slot name="additional-info"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import { Cat, Dog } from 'lucide-vue-next'
  
  interface Props {
    pet: {
      id: number
      name: string
      image: string
      species: 'dog' | 'cat'
    }
  }
  
  const props = defineProps<Props>()
  
  // Emits
  defineEmits<{
    (e: 'click'): void
  }>()
  
  // Computed
  const speciesIcon = computed(() => {
    return props.pet.species === 'cat' ? Cat : Dog
  })
  </script>