<template>
  <header class="my-header">
    <h1>Aerotrack</h1>
    <Navbar />
  </header>
</template>

<script setup>
import Navbar from '../molecules/NavBar.vue'
</script>

<style scoped>
.my-header {
  background-color: #487fff;
  color: #ffffff;
  padding: 10px;
  align-items: center;
  display: flex;
}

h1 {
  margin: 0;
}
</style>
