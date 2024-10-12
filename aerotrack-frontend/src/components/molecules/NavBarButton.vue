<template>
    <Button class="navbar-btn">
        <slot></slot>
    </Button>
  </template>
  
  <script setup>
  import Button from '../atoms/AtomButton.vue';
  </script>
  
  <style scoped>
  .navbar-btn {
    font-size: 18px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }
  </style>