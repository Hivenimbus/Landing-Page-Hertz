<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
      <div class="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
    </div>

    <div class="video-container hidden lg:block">
      <video 
        autoplay 
        loop 
        muted 
        playsinline
        class="video-player">
        <source src="/Hertz brilho.mp4" type="video/mp4">
      </video>
    </div>

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

    <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>

    <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="animate-fade-in-up">
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-8 backdrop-blur-sm">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          Grupo Exclusivo - Vagas Limitadas
        </div>

        <h1 class="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
          <span class="block text-white mb-2">Transforme Sua</span>
          <span class="block bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">
            Vida Financeira
          </span>
        </h1>

        <p class="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Alcance sua <span class="text-green-400 font-semibold">liberdade financeira</span> com métodos
          <span class="text-green-400 font-semibold">0 risco</span>. Entre para a comunidade
          <span class="text-green-400 font-semibold">Prosperity</span> e tenha acesso a ferramentas exclusivas.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button class="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transform hover:scale-105 shadow-2xl shadow-green-500/25">
            <span class="mr-2">Quero Entrar para a Comunidade Prosperity</span>
            <svg class="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </button>

          <button class="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 border border-gray-600 rounded-full hover:border-green-400 hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 backdrop-blur-sm bg-white/5">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
            Ver Métodos Comprovados
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
          <div class="text-center">
            <div class="text-4xl font-bold text-green-400 mb-2">5K+</div>
            <div class="text-gray-400">Membros Ativos</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-green-400 mb-2">98%</div>
            <div class="text-gray-400">Taxa de Sucesso</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-green-400 mb-2">R$2.5K</div>
            <div class="text-gray-400">Lucro Médio Mensal</div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </div>
  </section>
</template>

<script setup>
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

.video-container {
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  width: 360px;
  height: 640px;
}

.video-player {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.3);
}

@media (max-width: 1280px) {
  .video-container {
    width: 280px;
    height: 498px;
    left: 3%;
  }
}
</style>
