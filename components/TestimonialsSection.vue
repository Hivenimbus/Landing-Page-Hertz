<template>
  <section class="relative py-32 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900">
    <div class="absolute inset-0 bg-hex-pattern opacity-10"></div>
    
    <div class="absolute inset-0">
      <div v-for="i in 25" :key="i"
           class="particle-float"
           :style="{
             left: Math.random() * 100 + '%',
             top: Math.random() * 100 + '%',
             animationDelay: Math.random() * 10 + 's',
             animationDuration: (Math.random() * 5 + 8) + 's'
           }">
      </div>
    </div>

    <div class="absolute top-1/4 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
    <div class="absolute bottom-1/4 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 1.5s;"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/8 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 3s;"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div class="text-center">
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-6 backdrop-blur-sm animate-fade-in">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
          </svg>
          Depoimentos Reais
        </div>

        <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
          <span class="text-white">O Que Dizem Nossos</span>
          <span class="block bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent mt-2">
            Clientes
          </span>
        </h2>

        <p class="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up">
          Histórias reais de pessoas que transformaram seus resultados com nossa plataforma
        </p>
      </div>
    </div>

    <div class="relative">
      <div class="overflow-hidden">
        <div class="testimonials-track flex gap-6">
          <div v-for="testimonial in testimonials" 
               :key="testimonial.id"
               class="testimonial-card group flex-shrink-0">
            <div class="card-inner">
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/5 transition-all duration-500"></div>
              
              <div class="absolute -inset-0.5 bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 rounded-2xl opacity-30 group-hover:opacity-60 blur transition-all duration-500"></div>

              <div class="relative h-full">
                <img :src="testimonial.image" 
                     :alt="testimonial.name"
                     class="card-image">
              </div>
            </div>
          </div>

          <div v-for="testimonial in testimonials" 
               :key="'dup-' + testimonial.id"
               class="testimonial-card group flex-shrink-0">
            <div class="card-inner">
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/5 transition-all duration-500"></div>
              
              <div class="absolute -inset-0.5 bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 rounded-2xl opacity-30 group-hover:opacity-60 blur transition-all duration-500"></div>

              <div class="relative h-full">
                <img :src="testimonial.image" 
                     :alt="testimonial.name"
                     class="card-image">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900 via-gray-900/50 to-transparent pointer-events-none z-20"></div>
      <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900 via-gray-900/50 to-transparent pointer-events-none z-20"></div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    id: 1,
    name: "Foto 1",
    image: "/0.jpeg"
  },
  {
    id: 2,
    name: "Foto 2",
    image: "/1.jpeg"
  },
  {
    id: 3,
    name: "Foto 3",
    image: "/2.jpeg"
  },
  {
    id: 4,
    name: "Foto 4",
    image: "/3.jpeg"
  },
  {
    id: 5,
    name: "Foto 5",
    image: "/4.jpeg"
  },
  {
    id: 6,
    name: "Foto 6",
    image: "/5.jpeg"
  },
  {
    id: 7,
    name: "Foto 7",
    image: "/6.jpeg"
  },
  {
    id: 8,
    name: "Foto 8",
    image: "/7.jpeg"
  },
  {
    id: 9,
    name: "Foto 9",
    image: "/8.jpeg"
  },
  {
    id: 10,
    name: "Foto 10",
    image: "/9.jpeg"
  },
  {
    id: 11,
    name: "Foto 11",
    image: "/10.jpeg"
  },
  {
    id: 12,
    name: "Foto 12",
    image: "/11.jpeg"
  },
  {
    id: 13,
    name: "Foto 13",
    image: "/12.jpeg"
  }
]
</script>

<style scoped>
.bg-hex-pattern {
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.04) 2%, transparent 0%),
    radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.04) 2%, transparent 0%);
  background-size: 60px 60px;
  background-position: 0 0, 30px 30px;
}

.particle-float {
  position: absolute;
  width: 3px;
  height: 3px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.8) 0%, transparent 70%);
  border-radius: 50%;
  animation: float-particle ease-in-out infinite;
  pointer-events: none;
}

@keyframes float-particle {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(30px, -30px) scale(1.3);
    opacity: 0.8;
  }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.15;
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

.testimonials-track {
  animation: marquee 45s linear infinite;
  will-change: transform;
}

.testimonials-track:hover {
  animation-play-state: paused;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.testimonial-card {
  width: 280px;
  height: 520px;
}

@media (max-width: 640px) {
  .testimonial-card {
    width: 240px;
    height: 480px;
  }
  
  .testimonials-track {
    animation-duration: 35s;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .testimonial-card {
    width: 260px;
    height: 500px;
  }
  
  .testimonials-track {
    animation-duration: 40s;
  }
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(31, 41, 55, 0.5), rgba(17, 24, 39, 0.5));
  backdrop-filter: blur(16px);
  border-radius: 1rem;
  border: 1px solid rgba(75, 85, 99, 0.3);
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.group:hover .card-inner {
  transform: translateY(-8px);
  border-color: rgba(16, 185, 129, 0.5);
  box-shadow: 0 25px 50px -12px rgba(16, 185, 129, 0.25);
}

.image-container {
  position: relative;
  width: 100%;
  height: 340px;
  overflow: hidden;
  border-radius: 1rem 1rem 0 0;
}

@media (max-width: 640px) {
  .image-container {
    height: 300px;
  }
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  border-radius: 1rem;
}

.group:hover .card-image {
  transform: scale(1.1);
}

.card-content {
  padding: 1.5rem;
}

@media (max-width: 640px) {
  .card-content {
    padding: 1rem;
  }
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
