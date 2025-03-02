<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-16">
      <!-- Logo Section -->
      <div class="flex-1 text-center md:text-left">
        <img 
          src="/HuellasFelices.png" 
          alt="Huellas Felices Logo"
          class="w-64 md:w-80 mx-auto md:mx-0"
        />
      </div>

      <!-- Form Section -->
      <div class="flex-1 w-full max-w-md">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Crea tu cuenta
        </h2>
        <form @submit.prevent="handleSubmit" class="mt-8 space-y-6">
          <!-- Username Input -->
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700">
              Nombre de usuario
            </label>
            <div class="mt-1">
              <input
                id="username"
                v-model="form.username"
                type="text"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#FF9234] focus:border-[#FF9234]"
                :class="{ 'border-red-500': errors.username }"
              />
              <p v-if="errors.username" class="mt-1 text-sm text-red-600">
                {{ errors.username }}
              </p>
            </div>
          </div>

          <!-- First Name Input -->
          <div>
            <label for="firstName" class="block text-sm font-medium text-gray-700">
              Primer nombre
            </label>
            <div class="mt-1">
              <input
                id="firstName"
                v-model="form.firstName"
                type="text"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#FF9234] focus:border-[#FF9234]"
                :class="{ 'border-red-500': errors.firstName }"
              />
              <p v-if="errors.firstName" class="mt-1 text-sm text-red-600">
                {{ errors.firstName }}
              </p>
            </div>
          </div>

          <!-- Last Name Input -->
          <div>
            <label for="lastName" class="block text-sm font-medium text-gray-700">
              Apellido
            </label>
            <div class="mt-1">
              <input
                id="lastName"
                v-model="form.lastName"
                type="text"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#FF9234] focus:border-[#FF9234]"
                :class="{ 'border-red-500': errors.lastName }"
              />
              <p v-if="errors.lastName" class="mt-1 text-sm text-red-600">
                {{ errors.lastName }}
              </p>
            </div>
          </div>

          <!-- Email Input -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div class="mt-1">
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#FF9234] focus:border-[#FF9234]"
                :class="{ 'border-red-500': errors.email }"
              />
              <p v-if="errors.email" class="mt-1 text-sm text-red-600">
                {{ errors.email }}
              </p>
            </div>
          </div>

          <!-- Password Input -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <div class="mt-1 relative">
              <input
                id="password"
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#FF9234] focus:border-[#FF9234]"
                :class="{ 'border-red-500': errors.password }"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <Eye v-if="!showPassword" class="h-5 w-5 text-gray-400" />
                <EyeOff v-else class="h-5 w-5 text-gray-400" />
              </button>
              <p v-if="errors.password" class="mt-1 text-sm text-red-600">
                {{ errors.password }}
              </p>
            </div>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#253B06] hover:bg-[#2f4a08] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9234] disabled:opacity-50"
          >
            <Loader2 v-if="isLoading" class="animate-spin -ml-1 mr-2 h-4 w-4" />
            Registrarse
          </button>

          <!-- Login Link -->
          <div class="text-center text-sm">
            <span class="text-gray-600">¿Ya tienes una cuenta?</span>
            <router-link 
              to="/login"
              class="ml-1 text-[#FF9234] hover:text-[#ff8010]"
            >
              Inicia sesión
            </router-link>
          </div>
        </form>

        <!-- Social Registration -->
        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-gray-50 text-gray-500">O regístrate con</span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              @click="handleFacebookRegister"
              class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-[#1877F2] text-sm font-medium text-white hover:bg-[#1664d4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1877F2]"
            >
              <Facebook class="h-5 w-5" />
              <span class="ml-2">Facebook</span>
            </button>
            <button
              type="button"
              @click="handleGoogleRegister"
              class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4285F4]"
            >
              <img
                class="h-5 w-5"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google logo"
              />
              <span class="ml-2">Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Eye, EyeOff, Loader2, Facebook } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoading = ref(false)
const showPassword = ref(false)

const form = reactive({
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: ''
})

const errors = reactive({
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: ''
})

const validateForm = () => {
  let isValid = true
  errors.username = ''
  errors.firstName = ''
  errors.lastName = ''
  errors.email = ''
  errors.password = ''

  if (!form.username) {
    errors.username = 'El nombre de usuario es requerido'
    isValid = false
  }

  if (!form.firstName) {
    errors.firstName = 'El primer nombre es requerido'
    isValid = false
  }

  if (!form.lastName) {
    errors.lastName = 'El apellido es requerido'
    isValid = false
  }

  if (!form.email) {
    errors.email = 'El email es requerido'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Email inválido'
    isValid = false
  }

  if (!form.password) {
    errors.password = 'La contraseña es requerida'
    isValid = false
  } else if (form.password.length < 6) {
    errors.password = 'La contraseña debe tener al menos 6 caracteres'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) return

  try {
    isLoading.value = true
    // Aquí iría la lógica de registro
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulación
    router.push('/dashboard')
  } catch (error) {
    console.error('Error al registrarse:', error)
  } finally {
    isLoading.value = false
  }
}

const handleFacebookRegister = () => {
  // Implementar registro con Facebook
  console.log('Facebook register')
}

const handleGoogleRegister = () => {
  // Implementar registro con Google
  console.log('Google register')
}
</script>