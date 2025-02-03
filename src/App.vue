<script>
import { RouterLink, RouterView } from 'vue-router'

export default{
  
}

</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/insertComponent">Insert component</RouterLink>
        <RouterLink to="/dataBinding">Data binding</RouterLink>
        <RouterLink to="/eventHandling">Event component</RouterLink>
        <RouterLink to="/conditionRendering">Contitional rendering</RouterLink>
        <RouterLink to="/props">Props</RouterLink>
        <RouterLink to="/emits">Emits</RouterLink>
      </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <h3>created by christosste86@gmail.com</h3>
  </footer>
</template>

<style scoped>

</style>
