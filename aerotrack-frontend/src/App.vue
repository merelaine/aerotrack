<script setup>
import AppHeader from './components/Header.vue'
import AppFooter from './components/Footer.vue'
</script>

<template>
  <div id="app">
    <AppHeader />
    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
} 

main {
  flex: 1;
}
</style>
