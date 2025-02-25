<template>
    <footer class="footer">
      <div class="footer-container">
        <!-- Logo -->
        <div class="logo-container">
          <img 
            src="/HuellasFelices.png"
            alt="Huellas Felices Logo" 
            class="logo"
          />
        </div>
  
        <!-- Social Media Links -->
        <div class="social-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-link">
            <Instagram :size="24" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-link">
            <Facebook :size="24" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="social-link">
            <Youtube :size="24" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="social-link">
            <Twitter :size="24" />
          </a>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  import { Instagram, Facebook, Youtube, Twitter } from 'lucide-vue-next'
  import { computed } from 'vue'
  
  const currentYear = computed(() => new Date().getFullYear())
  </script>
  
  <style scoped>
  .footer {
    background-color: #FFFFFF;
    padding: 2rem 1rem;
    margin-top: auto;
  }
  
  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  
  .logo-container {
    display: flex;
    justify-content: center;
  }
  
  .logo {
    height: 150px;
    width: auto;
  }
  
  .social-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
  
  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background-color: #253B06;
    border-radius: 50%;
    color: #FFFFFF;
    transition: all 0.3s ease;
  }
  
  .social-link:hover {
    background-color: #FF9234;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .footer {
      padding: 1.5rem 1rem;
    }
  
    .logo {
      height: 60px;
    }
  
    .social-links {
      gap: 0.75rem;
    }
  
    .social-link {
      width: 40px;
      height: 40px;
    }
  }
  </style>