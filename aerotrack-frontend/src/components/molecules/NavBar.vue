<template>
  <nav>
    <NavbarButton @click="goToHome">Главная</NavbarButton>
    <NavbarButton @click="goToAbout">О нас</NavbarButton>
  </nav>
</template>

<script setup>
import NavbarButton from './NavBarButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToHome = () => router.push('/')
const goToAbout = () => router.push('/about')
</script>

<style scoped>
nav {
  margin-left: auto;
}
</style>
