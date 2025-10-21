<template>
  <section class="relative py-32 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
    <div class="absolute inset-0 bg-hex-pattern opacity-10"></div>
    <div class="absolute inset-0 bg-noise opacity-5"></div>
    
    <div class="absolute inset-0">
      <div v-for="i in 50" :key="i"
           class="particle-trail"
           :style="{
             left: Math.random() * 100 + '%',
             top: Math.random() * 100 + '%',
             animationDelay: Math.random() * 8 + 's',
             animationDuration: (Math.random() * 4 + 3) + 's'
           }">
      </div>
    </div>

    <div class="absolute inset-0">
      <div v-for="i in 8" :key="'circuit-' + i"
           class="circuit-line"
           :style="{
             top: (i * 12.5) + '%',
             animationDelay: (i * 0.3) + 's'
           }">
      </div>
    </div>

    <div class="scan-radar"></div>

    <div class="absolute inset-0">
      <div v-for="i in 15" :key="'node-' + i"
           class="tech-node"
           :style="{
             left: Math.random() * 100 + '%',
             top: Math.random() * 100 + '%',
             animationDelay: Math.random() * 3 + 's'
           }">
      </div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-24">
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-6 backdrop-blur-sm animate-fade-in">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
          Métodos Exclusivos
        </div>

        <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
          <span class="text-white">Nossos</span>
          <span class="bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent"> Grupos</span>
        </h2>

        <p class="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up">
          Acesso exclusivo a métodos 0 risco e plataformas proprietárias para multiplicar seus ganhos
        </p>
      </div>

      <div class="relative">
        <div class="absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2 hidden lg:block">
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-green-500 to-transparent opacity-30"></div>
          <div class="absolute inset-0 animate-pulse-line bg-gradient-to-b from-green-400 to-emerald-400"></div>
        </div>

        <div class="space-y-24 lg:space-y-32">
          <div v-for="(step, index) in steps" 
               :key="index"
               :ref="el => stepRefs[index] = el"
               class="relative"
               :class="index % 2 === 0 ? 'lg:pr-[55%]' : 'lg:pl-[55%]'">
            
            <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center w-16 h-16 z-20"
                 :class="isVisible[index] ? 'animate-dot-pulse' : ''"
                 :style="{ animationDelay: (index * 0.15) + 's' }">
              <div class="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 animate-spin-slow opacity-20"></div>
              <div class="absolute inset-2 rounded-full bg-gray-900 border-2 border-green-500"></div>
              <div class="relative z-10 w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/50">
                <span class="text-white font-bold text-sm">{{ index + 1 }}</span>
              </div>
            </div>

            <div class="progression-card group"
                 :class="[
                   index % 2 === 0 ? 'lg:text-right' : 'lg:text-left',
                   isVisible[index] ? (index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right') : ''
                 ]"
                 :style="{ animationDelay: (index * 0.15) + 's' }">
              
              <div class="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 transform hover:-translate-y-2">
                <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/5 transition-all duration-500"></div>
                
                <div class="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500"></div>

                <div class="relative">
                  <div class="flex items-center mb-6"
                       :class="index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'">
                    <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform duration-300"
                         :class="isVisible[index] ? 'animate-icon-pop' : ''"
                         :style="{ animationDelay: (index * 0.15 + 0.3) + 's' }">
                      <!-- IconSports -->
                      <svg v-if="step.icon === 'IconSports'" class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/>
                      </svg>

                      <!-- IconCasino -->
                      <svg v-else-if="step.icon === 'IconCasino'" class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                      </svg>

                      <!-- IconShield -->
                      <svg v-else-if="step.icon === 'IconShield'" class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                      </svg>

                      <!-- IconEducation -->
                      <svg v-else-if="step.icon === 'IconEducation'" class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                      </svg>

                      <!-- IconPlatform -->
                      <svg v-else-if="step.icon === 'IconPlatform'" class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                      </svg>
                    </div>
                  </div>

                  <div class="lg:hidden flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 shadow-lg shadow-green-500/50 mb-4 mx-auto">
                    <span class="text-white font-bold">{{ index + 1 }}</span>
                  </div>

                  <h3 class="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                    {{ step.title }}
                  </h3>

                  <p class="text-gray-400 text-lg mb-6 leading-relaxed">
                    {{ step.description }}
                  </p>

                  <div class="flex flex-wrap gap-2"
                       :class="index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'">
                    <span v-for="tag in step.tags" 
                          :key="tag"
                          class="px-3 py-1 text-xs font-medium text-green-400 bg-green-500/10 border border-green-500/30 rounded-full backdrop-blur-sm">
                      {{ tag }}
                    </span>
                  </div>

                  <div class="mt-6 flex items-center gap-2"
                       :class="index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'">
                    <span class="text-sm text-gray-500">Tempo estimado:</span>
                    <span class="text-sm font-semibold text-green-400">{{ step.duration }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute top-1/2 left-0 w-80 h-80 bg-green-500/15 rounded-full blur-3xl transform -translate-y-1/2 animate-pulse-slow"></div>
    <div class="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 1s;"></div>
    <div class="absolute bottom-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 2s;"></div>
    <div class="absolute top-1/3 right-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 3s;"></div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const stepRefs = ref([])
const isVisible = ref([])

const steps = [
  {
    title: 'Delay Esportivo com Narrador',
    description: 'Aproveite as diferenças de tempo entre transmissões esportivas. Nosso sistema identifica oportunidades em tempo real com narração ao vivo para guiar suas operações. Zero risco, lucro garantido.',
    tags: ['0 RISCO', 'Narração ao Vivo', 'Tempo Real'],
    duration: 'Acesso Imediato',
    icon: 'IconSports'
  },
  {
    title: 'Rodadas Grátis e Missões',
    description: 'Monetize apostas gratuitas e complete missões em cassinos online. Estratégias comprovadas para transformar bônus em lucro real com risco mínimo controlado.',
    tags: ['BAIXO RISCO', 'Bônus Exclusivos', 'Missões Diárias'],
    duration: 'Acesso Imediato',
    icon: 'IconCasino'
  },
  {
    title: 'Surebets e Promoções',
    description: 'Explore diferenças de odds entre casas de apostas. Software automatizado identifica oportunidades 100% seguras e aproveita as melhores promoções do mercado.',
    tags: ['0 RISCO', 'Software Automatizado', 'Análise Instantânea'],
    duration: 'Acesso Imediato',
    icon: 'IconShield'
  },
  {
    title: 'Prospeflix - Plataforma de Ensino',
    description: 'Acesso VIP à nossa plataforma educacional exclusiva. Aulas completas sobre os principais mercados, estratégias avançadas e gestão de banca profissional.',
    tags: ['Educação', 'Vídeos Exclusivos', 'Certificado'],
    duration: 'Acesso Vitalício',
    icon: 'IconEducation'
  },
  {
    title: 'BetRiser - Gerenciamento Inteligente',
    description: 'Plataforma proprietária para gerenciamento de lucros, planilhas automatizadas, superodds exclusivas, roletas de oportunidades e integração com surebets em tempo real.',
    tags: ['Plataforma Exclusiva', 'Automação', 'Analytics Avançado'],
    duration: 'Acesso Vitalício',
    icon: 'IconPlatform'
  }
]

const observer = ref(null)

onMounted(() => {
  isVisible.value = new Array(steps.length).fill(false)
  
  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = stepRefs.value.findIndex(ref => ref === entry.target)
          if (index !== -1) {
            isVisible.value[index] = true
          }
        }
      })
    },
    { threshold: 0.2 }
  )

  stepRefs.value.forEach((ref) => {
    if (ref) observer.value.observe(ref)
  })
})

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect()
  }
})

</script>

<style scoped>
.bg-hex-pattern {
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.04) 2%, transparent 0%),
    radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.04) 2%, transparent 0%);
  background-size: 60px 60px;
  background-position: 0 0, 30px 30px;
}

.bg-noise {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E");
  animation: noise-move 8s steps(10) infinite;
}

@keyframes noise-move {
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-5%, -5%); }
  20% { transform: translate(-10%, 5%); }
  30% { transform: translate(5%, -10%); }
  40% { transform: translate(-5%, 15%); }
  50% { transform: translate(-10%, 5%); }
  60% { transform: translate(15%, 0%); }
  70% { transform: translate(0%, 10%); }
  80% { transform: translate(-15%, 0%); }
  90% { transform: translate(10%, 5%); }
}

.particle-trail {
  position: absolute;
  width: 3px;
  height: 3px;
  background: radial-gradient(circle, rgba(16, 185, 129, 1) 0%, transparent 70%);
  border-radius: 50%;
  animation: float-trail ease-in-out infinite;
  pointer-events: none;
  box-shadow: 
    0 0 20px rgba(16, 185, 129, 0.6),
    0 0 40px rgba(16, 185, 129, 0.3);
}

@keyframes float-trail {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  50% {
    transform: translate(40px, -80px) scale(1.2);
    opacity: 0.6;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    transform: translate(80px, -160px) scale(0.5);
    opacity: 0;
  }
}

.circuit-line {
  position: absolute;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(16, 185, 129, 0) 20%,
    rgba(16, 185, 129, 0.4) 40%,
    rgba(52, 211, 153, 0.6) 50%,
    rgba(16, 185, 129, 0.4) 60%,
    rgba(16, 185, 129, 0) 80%,
    transparent 100%
  );
  animation: circuit-flow 4s linear infinite;
  opacity: 0.3;
}

@keyframes circuit-flow {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.scan-radar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(16, 185, 129, 0.08) 48%,
    rgba(52, 211, 153, 0.15) 50%,
    rgba(16, 185, 129, 0.08) 52%,
    transparent 100%
  );
  animation: radar-scan 8s ease-in-out infinite;
  pointer-events: none;
}

@keyframes radar-scan {
  0%, 100% {
    transform: translateY(-100%);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
}

.tech-node {
  position: absolute;
  width: 8px;
  height: 8px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.8) 0%, transparent 70%);
  border-radius: 50%;
  animation: node-pulse 2s ease-in-out infinite;
  pointer-events: none;
}

.tech-node::before,
.tech-node::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  animation: node-ripple 2s ease-out infinite;
}

.tech-node::before {
  width: 20px;
  height: 20px;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.tech-node::after {
  width: 30px;
  height: 30px;
  border: 1px solid rgba(16, 185, 129, 0.2);
  animation-delay: 0.5s;
}

@keyframes node-pulse {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.3);
  }
}

@keyframes node-ripple {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.5);
  }
}

@keyframes pulse-line {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.8;
  }
}

.animate-pulse-line {
  animation: pulse-line 3s ease-in-out infinite;
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.2;
    transform: scale(1.1);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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

.animate-slide-in {
  animation: slideIn 0.8s ease-out forwards;
}

.progression-card {
  transition: all 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-left {
  animation: slideInFromLeft 1s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

.animate-slide-in-right {
  animation: slideInFromRight 1s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

@keyframes slideInFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-120px) scale(0.8) rotate(-5deg);
    filter: blur(10px);
  }
  60% {
    filter: blur(0px);
  }
  80% {
    transform: translateX(10px) scale(1.02) rotate(1deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1) rotate(0deg);
    filter: blur(0px);
  }
}

@keyframes slideInFromRight {
  0% {
    opacity: 0;
    transform: translateX(120px) scale(0.8) rotate(5deg);
    filter: blur(10px);
  }
  60% {
    filter: blur(0px);
  }
  80% {
    transform: translateX(-10px) scale(1.02) rotate(-1deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1) rotate(0deg);
    filter: blur(0px);
  }
}

@keyframes iconPop {
  0% {
    opacity: 0;
    transform: scale(0) rotate(-180deg);
  }
  60% {
    transform: scale(1.2) rotate(10deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

.animate-icon-pop {
  animation: iconPop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
}

@keyframes dotPulse {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-dot-pulse {
  animation: dotPulse 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

.progression-card:not(.animate-slide-in-left):not(.animate-slide-in-right) {
  opacity: 0;
}

.progression-card {
  transition: all 0.3s ease-out;
}

@media (max-width: 1023px) {
  .progression-card {
    text-align: center;
  }
}
</style>
