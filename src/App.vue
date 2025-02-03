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
