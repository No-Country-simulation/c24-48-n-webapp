<template>
    <div class="min-h-screen bg-gray-50">
      <!-- Header -->
      <header class="bg-[#253B06] py-4">
        <div class="container mx-auto px-4">
          <h1 class="text-2xl text-white font-semibold">Agregar nueva mascota</h1>
        </div>
      </header>
  
      <!-- Progress Bar -->
      <div class="bg-[#253B06] pb-8">
        <div class="container mx-auto px-4">
          <div class="relative">
            <!-- Progress Line -->
            <div class="absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 -translate-y-1/2"></div>
            
            <!-- Steps -->
            <div class="relative flex justify-between">
              <div 
                v-for="(step, index) in steps" 
                :key="step.name"
                class="flex flex-col items-center"
              >
                <!-- Step Circle -->
                <div 
                  class="w-8 h-8 rounded-full flex items-center justify-center relative z-10"
                  :class="[
                    currentStep > index 
                      ? 'bg-[#FF9234]' 
                      : currentStep === index 
                        ? 'bg-[#FF9234]' 
                        : 'bg-gray-300'
                  ]"
                >
                  <Check v-if="currentStep > index" class="w-5 h-5 text-white" />
                  <span v-else class="text-white">{{ index + 1 }}</span>
                </div>
                <!-- Step Name -->
                <span 
                  class="mt-2 text-sm"
                  :class="[
                    currentStep >= index 
                      ? 'text-white' 
                      : 'text-gray-400'
                  ]"
                >
                  {{ step.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Form Content -->
      <div class="container mx-auto px-4 py-8">
        <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6">
          <!-- Basic Information Step -->
          <div v-if="currentStep === 0">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Image Upload -->
              <div class="md:col-span-2 flex justify-center">
                <div class="relative w-40 h-40">
                  <div 
                    class="w-full h-full rounded-full bg-gray-100 flex items-center justify-center overflow-hidden"
                  >
                    <img 
                      v-if="form.image" 
                      :src="form.image" 
                      class="w-full h-full object-cover"
                      alt="Pet preview"
                    />
                    <Upload v-else class="w-8 h-8 text-gray-400" />
                  </div>
                  <button 
                    @click="triggerImageUpload"
                    class="absolute bottom-0 right-0 bg-[#FF9234] p-2 rounded-full text-white hover:bg-[#ff8010]"
                  >
                    <Camera class="w-4 h-4" />
                  </button>
                  <input
                    ref="fileInput"
                    type="file"
                    accept="image/*"
                    class="hidden"
                    @change="handleImageUpload"
                  />
                </div>
              </div>
  
              <!-- Basic Fields -->
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700">Nombre</label>
                  <input
                    v-model="form.name"
                    type="text"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]"
                  />
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700">Sexo</label>
                  <select
                    v-model="form.sex"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]"
                  >
                    <option value="male">Macho</option>
                    <option value="female">Hembra</option>
                  </select>
                </div>
  
                <div>
                  <label class="block text-sm font-medium text-gray-700">Tipo de animal</label>
                  <select
                    v-model="form.type"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]"
                  >
                    <option value="dog">Perro</option>
                    <option value="cat">Gato</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
              </div>
  
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700">Colores</label>
                  <input
                    v-model="form.colors"
                    type="text"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]"
                  />
                </div>
  
                <div>
                  <label class="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
                  <input
                    v-model="form.birthDate"
                    type="date"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]"
                  />
                </div>
  
                <div>
                  <label class="block text-sm font-medium text-gray-700">Fecha de Rescate</label>
                  <input
                    v-model="form.rescueDate"
                    type="date"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]"
                  />
                </div>
              </div>
  
              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-gray-700">Notas</label>
                <textarea
                  v-model="form.notes"
                  rows="3"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]"
                ></textarea>
              </div>
            </div>
          </div>
  
          <!-- Health Information Step -->
          <div v-if="currentStep === 1">
            <div class="space-y-6">
              <div v-for="field in healthFields" :key="field.name">
                <label class="block text-sm font-medium text-gray-700">{{ field.label }}</label>
                <input
                  v-model="form.health[field.name]"
                  :type="field.type"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]"
                />
              </div>
            </div>
          </div>
  
          <!-- Adoption Information Step -->
          <div v-if="currentStep === 2">
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700">Información de Adopción</label>
                <textarea
                  v-model="form.adoption.info"
                  rows="4"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]"
                ></textarea>
              </div>
  
              <div>
                <label class="block text-sm font-medium text-gray-700">Fecha de ingreso al refugio</label>
                <input
                  v-model="form.adoption.shelterDate"
                  type="date"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]"
                />
              </div>
  
              <div>
                <label class="block text-sm font-medium text-gray-700">Estado</label>
                <select
                  v-model="form.adoption.status"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]"
                >
                  <option value="available">Disponible</option>
                  <option value="in_process">En proceso</option>
                  <option value="adopted">Adoptado</option>
                </select>
              </div>
  
              <div>
                <label class="block text-sm font-medium text-gray-700">Descripción de su personalidad</label>
                <textarea
                  v-model="form.adoption.personality"
                  rows="4"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]"
                ></textarea>
              </div>
  
              <div>
                <label class="block text-sm font-medium text-gray-700">Tipo de hogar recomendado</label>
                <input
                  v-model="form.adoption.recommendedHome"
                  type="text"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]"
                />
              </div>
  
              <div>
                <label class="block text-sm font-medium text-gray-700">Ubicación actual</label>
                <select
                  v-model="form.adoption.location"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]"
                >
                  <option value="shelter">Refugio</option>
                  <option value="foster">Hogar temporal</option>
                  <option value="vet">Veterinaria</option>
                </select>
              </div>
            </div>
          </div>
  
          <!-- Navigation Buttons -->
          <div class="mt-8 flex justify-between">
            <button
              v-if="currentStep > 0"
              @click="previousStep"
              class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Anterior
            </button>
            <button
              v-if="currentStep < steps.length - 1"
              @click="nextStep"
              class="ml-auto px-4 py-2 bg-[#253B06] text-white rounded-md text-sm font-medium hover:bg-[#2f4a08]"
            >
              Siguiente
            </button>
            <button
              v-else
              @click="submitForm"
              class="ml-auto px-4 py-2 bg-[#253B06] text-white rounded-md text-sm font-medium hover:bg-[#2f4a08]"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive } from 'vue'
  import { Check, Upload, Camera } from 'lucide-vue-next'
  
  const currentStep = ref(0)
  const fileInput = ref<HTMLInputElement | null>(null)
  
  const steps = [
    { name: 'Básico' },
    { name: 'Salud' },
    { name: 'Adopción' }
  ]
  
  interface HealthField {
    name: keyof PetForm['health'];
    label: string;
    type: string;
  }
  
  const healthFields: HealthField[] = [
    { name: 'weight', label: 'Peso', type: 'text' },
    { name: 'rescueState', label: 'Estado de rescatado', type: 'text' },
    { name: 'deworming', label: 'Desparasitación', type: 'text' },
    { name: 'vaccines', label: 'Vacunas', type: 'text' },
    { name: 'neutering', label: 'Castración', type: 'text' },
    { name: 'medication', label: 'Medicación', type: 'text' },
    { name: 'surgery', label: 'Cirugía e intervenciones', type: 'text' },
    { name: 'food', label: 'Alimento', type: 'text' }
  ]
  
  interface PetForm {
    image: string;
    name: string;
    sex: string;
    type: string;
    colors: string;
    birthDate: string;
    rescueDate: string;
    notes: string;
    health: {
      weight: string;
      rescueState: string;
      deworming: string;
      vaccines: string;
      neutering: string;
      medication: string;
      surgery: string;
      food: string;
    };
    adoption: {
      info: string;
      shelterDate: string;
      status: string;
      personality: string;
      recommendedHome: string;
      location: string;
    };
  }
  
  const form = reactive<PetForm>({
    image: '',
    name: '',
    sex: '',
    type: '',
    colors: '',
    birthDate: '',
    rescueDate: '',
    notes: '',
    health: {
      weight: '',
      rescueState: '',
      deworming: '',
      vaccines: '',
      neutering: '',
      medication: '',
      surgery: '',
      food: ''
    },
    adoption: {
      info: '',
      shelterDate: '',
      status: 'available',
      personality: '',
      recommendedHome: '',
      location: ''
    }
  })
  
  const triggerImageUpload = () => {
    fileInput.value?.click()
  }
  
  const handleImageUpload = (event: Event) => {
    const target = event.target as HTMLInputElement
    if (target.files && target.files[0]) {
      const file = target.files[0]
      const reader = new FileReader()
      reader.onload = e => {
        form.image = e.target?.result as string
      }
      reader.readAsDataURL(file)
    }
  }
  
  const nextStep = () => {
    if (currentStep.value < steps.length - 1) {
      currentStep.value++
    }
  }
  
  const previousStep = () => {
    if (currentStep.value > 0) {
      currentStep.value--
    }
  }
  
  const submitForm = async () => {
    try {
      // Aquí iría la lógica para enviar el formulario
      console.log('Form submitted:', form)
      // Ejemplo de cómo podrías enviar los datos a un servidor:
      // await fetch('/api/pets', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(form)
      // })
      // Handle the response as needed
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }
  </script>
  
  <style scoped>
  /* Add any component-specific styles here */
  </style>