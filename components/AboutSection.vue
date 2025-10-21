<template>
  <section id="about" class="py-20 bg-gradient-to-b from-black to-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Conheça o Grupo <span class="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Prosperity</span>
          </h2>
          <p class="text-xl text-gray-300 mb-8 leading-relaxed">
            No Prosperity, oferecemos acesso exclusivo a métodos comprovados de ganho de dinheiro com 0 risco. Nossa comunidade tem acesso a plataformas proprietárias e suporte especializado para garantir sua liberdade financeira.
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
    title: 'Métodos 0 Risco',
    description: 'Estratégias comprovadas que eliminam completamente o risco financeiro.'
  },
  {
    title: 'Plataformas Exclusivas',
    description: 'Acesso VIP ao BetRiser e Prospeflix para maximizar seus lucros.'
  },
  {
    title: 'Comunidade Ativa',
    description: 'Mais de 5.000 membros compartilhando experiências e oportunidades.'
  }
]

const stats = [
  { value: '5K+', label: 'Membros' },
  { value: 'R$2.5K', label: 'Lucro Médio' },
  { value: '5+', label: 'Anos de Experiência' },
  { value: '98%', label: 'Taxa de Sucesso' }
]
</script>

<style scoped>
</style>
