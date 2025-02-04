<script>
import { RouterLink, RouterView } from 'vue-router'

export default{
  
}

</script>

<template>
  <header>
      <h2>Some examples with Vue</h2>
  </header>
  <section>
    <nav>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/insertComponent">Insert component</RouterLink></li>
          <li><RouterLink to="/dataBinding">Data binding</RouterLink></li>
          <li><RouterLink to="/eventHandling">Event component</RouterLink></li>
          <li><RouterLink to="/conditionRendering">Contitional rendering</RouterLink></li>
          <li><RouterLink to="/props">Props</RouterLink></li>
          <li><RouterLink to="/emits">Emits</RouterLink></li>
        </ul>
    </nav>

    <article>
      <RouterView />
    </article>

  </section>
  <footer>
    <p>created by christosste86@gmail.com</p>
  </footer>
</template>

<style scoped>

* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

header {
  background-color: #666;
  padding: 20px;
  text-align: center;
  font-size: 35px;
  color: white;
}


nav {
  float: left;
  width: 200px;
  height: 100%; 
  background: #ccc;
  padding: 20px;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

article {
  float: left;
  padding: 20px;
  height: 300px; 
}


section::after {
  content: "";
  display: table;
  clear: both;
}


footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: #777;
  padding: 0;
  text-align: center;
  color: white;
}


@media (max-width: 600px) {
  nav, article {
    width: 100%;
    height: auto;
  }
}
</style>
