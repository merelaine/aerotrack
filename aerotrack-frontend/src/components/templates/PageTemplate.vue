<template>
    <div class="page-template">
      <header>
        <MyCoolHeader />
      </header>
      <main>
        <div class="content">
            <slot></slot> 
        </div>
      </main>
      <footer>
        <MyCoolFooter />
      </footer>
    </div>
  </template>
  
  <script setup>
  import MyCoolHeader from '../organisms/MyHeader.vue';
  import MyCoolFooter from '../organisms/MyFooter.vue';
  </script>
  
  <style scoped>
  .page-template {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .content { 
    padding: 20px;
  }
  
  main {
    flex: 1; 
  }
  </style>