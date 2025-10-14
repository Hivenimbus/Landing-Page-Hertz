<template>
  <div class="relative">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background com gradient e partículas -->
      <div class="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div class="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
      </div>

      <!-- Partículas animadas -->
      <div class="absolute inset-0">
        <div class="particles-container">
          <div v-for="i in 50" :key="i"
               class="particle"
               :style="{
                 left: Math.random() * 100 + '%',
                 animationDelay: Math.random() * 20 + 's',
                 animationDuration: (Math.random() * 20 + 10) + 's'
               }">
          </div>
        </div>
      </div>

      <!-- Grid overlay -->
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <!-- Conteúdo Hero -->
      <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div class="animate-fade-in-up">
          <!-- Badge -->
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-8 backdrop-blur-sm">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            Nova Tecnologia Revolucionária
          </div>

          <!-- Título principal -->
          <h1 class="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span class="block text-white mb-2">O Futuro</span>
            <span class="block bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">
              Começa Agora
            </span>
          </h1>

          <!-- Subtítulo -->
          <p class="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforme suas ideias em realidade com nossa plataforma futurista.
            <span class="text-green-400 font-semibold">Inovação</span>,
            <span class="text-green-400 font-semibold">velocidade</span> e
            <span class="text-green-400 font-semibold">eficiência</span> em um só lugar.
          </p>

          <!-- Botões CTA -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button class="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transform hover:scale-105 shadow-2xl shadow-green-500/25">
              <span class="mr-2">Começar Gratuitamente</span>
              <svg class="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </button>

            <button class="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 border border-gray-600 rounded-full hover:border-green-400 hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 backdrop-blur-sm bg-white/5">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Ver Demonstração
            </button>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <div class="text-center">
              <div class="text-4xl font-bold text-green-400 mb-2">10K+</div>
              <div class="text-gray-400">Usuários Ativos</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div class="text-gray-400">Uptime</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div class="text-gray-400">Suporte</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Recursos <span class="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Revolucionários</span>
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Tecnologias de ponta que impulsionam seu negócio para o futuro
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature Cards -->
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

    <!-- About Section -->
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

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-xl">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Pronto para <span class="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Transformar?</span>
        </h2>
        <p class="text-xl text-gray-300 mb-12">
          Junte-se a milhares de empresas que já estão revolucionando seus negócios com nossa plataforma.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black transition-all duration-200 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full hover:from-green-500 hover:to-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 transform hover:scale-105 shadow-2xl shadow-green-400/25">
            <span>Começar Agora</span>
            <svg class="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </button>

          <button class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 border border-green-400/30 rounded-full hover:border-green-400 hover:bg-green-400/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 backdrop-blur-sm">
            Falar com Especialista
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO Meta
useHead({
  title: 'Hertz - O Futuro Começa Agora',
  meta: [
    { name: 'description', content: 'Transforme suas ideias em realidade com nossa plataforma futurista. Inovação, velocidade e eficiência em um só lugar.' },
    { name: 'keywords', content: 'tecnologia, inovação, futuro, plataforma, digital' },
    { property: 'og:title', content: 'Hertz - O Futuro Começa Agora' },
    { property: 'og:description', content: 'Transforme suas ideias em realidade com nossa plataforma futurista.' },
    { property: 'og:type', content: 'website' }
  ]
})

// Dados dinâmicos
const features = [
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Ultra Rápido',
    description: 'Processamento em velocidade da luz com otimização de última geração.'
  },
  {
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: '100% Seguro',
    description: 'Criptografia militar e proteção de dados avançada.'
  },
  {
    icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
    title: 'Dashboard Inteligente',
    description: 'Analytics em tempo real com insights poderosos.'
  },
  {
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
    title: 'Totalmente Configurável',
    description: 'Adapte tudo conforme suas necessidades específicas.'
  },
  {
    icon: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a9.001 9.001 0 01-7.432 0m9.032-4.026A9.001 9.001 0 0112 3c-4.474 0-8.268 3.12-9.032 7.326m0 0A9.001 9.001 0 0012 21c4.474 0 8.268-3.12 9.032-7.326',
    title: 'API Integrada',
    description: 'Conecte-se com qualquer sistema facilmente.'
  },
  {
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    title: 'Suporte Global',
    description: 'Equipe especializada disponível 24/7 em múltiplos idiomas.'
  }
]

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
.particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: linear-gradient(45deg, #10b981, #34d399);
  border-radius: 50%;
  animation: float linear infinite;
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
}

@keyframes float {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) rotate(720deg);
    opacity: 0;
  }
}

.bg-grid-pattern {
  background-image:
    linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>