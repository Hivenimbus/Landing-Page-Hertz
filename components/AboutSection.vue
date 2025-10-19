<template>
  <section id="about" class="py-20 bg-gradient-to-b from-black to-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Estamos <span class="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Moldando</span> o Futuro
          </h2>
          <p class="text-xl text-gray-300 mb-8 leading-relaxed">
            Na Hertz, combinamos tecnologia de ponta com design inovador para criar soluções que transformam radicalmente a maneira como você trabalha. Nossa plataforma é construída sobre os princípios de eficiência, segurança e escalabilidade.
          </p>

          <div class="space-y-6">
            <div v-for="(item, index) in aboutItems" :key="index" class="flex items-start">
              <div class="flex-shrink-0 w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-white mb-1">{{ item.title }}</h4>
                <p class="text-gray-400">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-3xl"></div>
          <div class="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 backdrop-blur-xl">
            <div class="grid grid-cols-2 gap-6">
              <div class="text-center">
                <div class="text-3xl font-bold text-green-400 mb-2">{{ stats[0].value }}</div>
                <div class="text-gray-400 text-sm">{{ stats[0].label }}</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-green-400 mb-2">{{ stats[1].value }}</div>
                <div class="text-gray-400 text-sm">{{ stats[1].label }}</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-green-400 mb-2">{{ stats[2].value }}</div>
                <div class="text-gray-400 text-sm">{{ stats[2].label }}</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-green-400 mb-2">{{ stats[3].value }}</div>
                <div class="text-gray-400 text-sm">{{ stats[3].label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const aboutItems = [
  {
    title: 'Tecnologia de Ponta',
    description: 'Utilizando as mais recentes inovações do mercado.'
  },
  {
    title: 'Performance Excepcional',
    description: 'Velocidade e confiabilidade garantidas.'
  },
  {
    title: 'Crescimento Ilimitado',
    description: 'Escala conforme sua necessidade.'
  }
]

const stats = [
  { value: '500+', label: 'Empresas' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Suporte' },
  { value: '150+', label: 'Países' }
]
</script>

<style scoped>
</style>
