<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
    <div class="max-w-md w-full text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-6">
        Bem-vindo à Landing Page
      </h1>
      <p class="text-lg text-gray-600 mb-8">
        Esta é uma página inicial simples sem autenticação.
      </p>
      <div class="space-y-4">
        <button class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Começar
        </button>
        <button class="w-full bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-medium hover:bg-gray-300 transition-colors">
          Saiba Mais
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Sem lógica de autenticação necessária
</script>