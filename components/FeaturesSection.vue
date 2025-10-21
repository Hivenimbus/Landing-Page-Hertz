<template>
  <section id="features" class="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Funcionalidades <span class="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Exclusivas</span>
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Ferramentas poderosas e métodos comprovados para maximizar seus lucros com 0 risco
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(feature, index) in features" :key="index"
             class="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
          <div class="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div class="relative z-10">
            <div class="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/25">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon"/>
              </svg>
            </div>

            <h3 class="text-2xl font-bold text-white mb-4">{{ feature.title }}</h3>
            <p class="text-gray-300 mb-6">{{ feature.description }}</p>

            <a href="#" class="inline-flex items-center text-green-400 font-semibold hover:text-green-300 transition-colors">
              Saiba mais
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Operações com Criptomoeda',
    description: 'Aproveite as melhores oportunidades do mercado cripto com análises automatizadas e sinais precisos.'
  },
  {
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'Missões Betano (0 RISCO)',
    description: 'Complete missões exclusivas e aproveite bônus garantidos para transformar em lucro real sem risco.'
  },
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'SuperOdds Exclusivas',
    description: 'Acesso a odds superiores ao mercado através de nossa rede de parceiros e análises exclusivas.'
  },
  {
    icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
    title: 'Funil de Oportunidades',
    description: 'Sistema inteligente que filtra e apresenta as melhores oportunidades de apostas em tempo real.'
  },
  {
    icon: 'M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z',
    title: 'Delay Esportivo com Narrador',
    description: 'Aproveite delays em transmissões ao vivo com narração especializada para guiar suas operações.'
  },
  {
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Surebets e Promoções',
    description: 'Software automatizado identifica oportunidades 100% seguras e as melhores promoções do mercado.'
  }
]
</script>

<style scoped>
</style>
