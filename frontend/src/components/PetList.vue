<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 m-4">
      <PetCard 
        v-for="pet in pets" 
        :key="pet.id" 
        :pet="pet"
        @click="handlePetClick(pet)"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import PetCard from './PetCard.vue'
  
  interface Pet {
    id: number
    name: string
    image: string
    species: 'dog' | 'cat'
  }
  
  const pets = ref<Pet[]>([
    {
      id: 1,
      name: 'Tuki',
      image: '/HuellasFelices.png',
      species: 'cat'
    },
    {
      id: 2,
      name: 'Rocky',
      image: '/HuellasFelices.png',
      species: 'dog'
    },
    {
      id: 3,
      name: 'Simba',
      image: '/HuellasFelices.png',
      species: 'cat'
    },
    {
      id: 4,
      name: 'Tango',
      image: '/HuellasFelices.png',
      species: 'dog'
    },
    {
      id: 5,
      name: 'Coco',
      image: '/HuellasFelices.png',
      species: 'dog'
    },
    {
      id: 6,
      name: 'Piti',
      image: '/HuellasFelices.png',
      species: 'cat'
    },
    {
      id: 7,
      name: 'Max',
      image: '/HuellasFelices.png',
      species: 'dog'
    },
    {
      id: 8,
      name: 'Luli',
      image: '/HuellasFelices.png',
      species: 'cat'
    },
    {
      id: 9,
      name: 'Titan',
      image: '/HuellasFelices.png',
      species: 'dog'
    },
  ])
  
  const handlePetClick = (pet: Pet) => {
    // Navegar a la página de detalles de la mascota
    console.log('Pet clicked:', pet)
  }
  </script>