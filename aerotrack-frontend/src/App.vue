<script setup>
import MyCoolHeader from './components/Header.vue'
import MyCoolFooter from './components/Footer.vue'
import './styles/app.css'
</script>

<template>
  <div class="flex-wrapper">
    <MyCoolHeader />
    <main>
      <router-view />
    </main>
    <MyCoolFooter />
  </div>
</template>

