// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase'
  ],
  supabase: {
    url: process.env.SUPABASE_URL || 'https://euowfdymhmjcdviapfvc.supabase.co',
    key: process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1b3dmZHltaG1qY2R2aWFwZnZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyNTg1ODksImV4cCI6MjA2NTgzNDU4OX0.cnkPXfg_A1QnODXqSFoF34Ejb3Eox47If319MsJu7XY',
    redirectOptions: {
      login: '/',
      callback: '/dashboard',
      exclude: ['/']
    }
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL || 'https://euowfdymhmjcdviapfvc.supabase.co',
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1b3dmZHltaG1qY2R2aWFwZnZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyNTg1ODksImV4cCI6MjA2NTgzNDU4OX0.cnkPXfg_A1QnODXqSFoF34Ejb3Eox47If319MsJu7XY'
    }
  }
})
