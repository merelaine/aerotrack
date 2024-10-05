<template>
  <header class="my-header">
    <h1>Aerotrack</h1>
    <nav>
      <button class="my-btn navbar_btn" @click="goToHome">Главная</button>
      <button class="my-btn navbar_btn" @click="goToAbout">О нас</button>
    </nav>
  </header>
</template>

<script setup>
import '../styles/button.css'
import { useRouter } from 'vue-router';

const router = useRouter();

const goToHome = () => router.push('/');
const goToAbout = () => router.push('/about');
</script>

<script>
export default {
  name: 'MyCoolHeader'
}
</script>

<style scoped>
.my-header {
  background-color: #487fff;
  color: #ffffff;
  padding: 10px;
  align-items: center;
  display: flex;
}

.navbar_btn {
  font-size: 18px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

h1{
  margin: 0;
}

nav {
  margin-left: auto;
}
</style>

