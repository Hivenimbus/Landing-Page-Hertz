<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navbar -->
    <nav class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0 flex items-center">
              <div class="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">A</span>
              </div>
              <h1 class="ml-2 text-xl font-semibold text-gray-900">Artermis</h1>
            </div>
          </div>
          
          <div class="flex items-center space-x-4">
            <button class="text-gray-500 hover:text-gray-700">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 14l6 6h-6v-6z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14l6 6H5v-6z"/>
              </svg>
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
    <footer class="bg-white border-t border-gray-200 mt-auto">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div class="text-center text-sm text-gray-500">
          © {{ new Date().getFullYear() }} Artermis. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Meta tags globais
useHead({
  titleTemplate: '%s - Artermis',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' }
  ]
})
</script> 