<template>
  <footer>
    <p>&copy; aerotrack</p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
footer {
  background-color: #343a40;
  color: white;
  height: 50px; 
  width: 100%;
  display: flex; 
  align-items: center;
  justify-content: center; 
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>