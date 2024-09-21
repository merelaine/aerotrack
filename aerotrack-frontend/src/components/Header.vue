<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/about">О нас</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
header {
  background-color: var(--color-background-soft);
  height: 60px;
  width: 100%; 
  display: flex;
  align-items: center;
  position: fixed; 
  top: 0; 
  left: 0; 
}

nav ul {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 10;
}

nav li {
  margin-right: 15px;
  line-height: 60px;
}
</style>
