<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Navbar -->
    <nav class="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <div class="flex-shrink-0 flex items-center">
              <div class="h-10 w-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/25">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h1 class="ml-3 text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Hertz
              </h1>
            </div>
          </div>

          <!-- Menu Desktop -->
          <div class="hidden md:flex items-center space-x-8">
            <a href="#features" class="text-gray-300 hover:text-white transition-colors duration-200">Recursos</a>
            <a href="#about" class="text-gray-300 hover:text-white transition-colors duration-200">Sobre</a>
            <a href="#contact" class="text-gray-300 hover:text-white transition-colors duration-200">Contato</a>
            <button class="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-green-500/25">
              Começar
            </button>
          </div>

          <!-- Menu Mobile Button -->
          <div class="md:hidden">
            <button @click="toggleMobileMenu" class="text-gray-300 hover:text-white">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Menu Mobile -->
        <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-800">
          <div class="flex flex-col space-y-3">
            <a href="#features" class="text-gray-300 hover:text-white transition-colors duration-200">Recursos</a>
            <a href="#about" class="text-gray-300 hover:text-white transition-colors duration-200">Sobre</a>
            <a href="#contact" class="text-gray-300 hover:text-white transition-colors duration-200">Contato</a>
            <button class="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-200">
              Começar
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Conteúdo da página -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gradient-to-t from-black to-gray-900 border-t border-gray-800">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center mb-4">
              <div class="h-10 w-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 class="ml-3 text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Hertz
              </h3>
            </div>
            <p class="text-gray-400 mb-4 max-w-md">
              O futuro da tecnologia está aqui. Inove, transforme e conquiste com nossas soluções futuristas.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-green-400 transition-colors">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-green-400 transition-colors">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 class="text-white font-semibold mb-4">Produto</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors">Recursos</a></li>
              <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors">Preços</a></li>
              <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors">API</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-white font-semibold mb-4">Empresa</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors">Sobre nós</a></li>
              <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors">Carreiras</a></li>
              <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {{ new Date().getFullYear() }} Hertz. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Estado do menu mobile
const mobileMenuOpen = ref(false)

// Toggle menu mobile
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Fechar menu ao clicar em link
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Meta tags globais
useHead({
  titleTemplate: '%s - Hertz',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' }
  ]
})
</script> 