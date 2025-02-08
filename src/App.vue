<script>
import { RouterLink, RouterView } from 'vue-router'

export default{
  name:'App'
  
}

</script>

<template>
  <header>
      <h2>Some examples with Vue</h2>
  </header>
  <container class="container">
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
          <li><RouterLink to="/slots">Slots</RouterLink></li>
          <li><RouterLink to="/scopedSlots">Scoped slots</RouterLink></li>
          <li><RouterLink to="/stateManagment">State managment</RouterLink></li>
          <li><RouterLink to="/vuex">Vuex</RouterLink></li>
        </ul>
    </nav>

    <article>
      <RouterView />
    </article>

  </section>
  <footer>
    <p>created by christosste86@gmail.com</p>
  </footer>
</container>
</template>

<style scoped>





header {
  background-color: #666;
  padding: 20px;
  text-align: center;
  font-size: 35px;
  color: white;
}

.container {
 display: grid;
 grid-template-areas: 
  "left right-top"
  "left right-bottom"
  "bottom bottom"
 ;

}

nav {
  float: left;
  
  height: 100%; 
  background: #ccc;
  padding: 20px;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

article {
  grid-area: right;
  width: 1000px;
  padding: 20px;
  height: 300px; 
}


section {
  grid-area: left;
  width: 160px;
  display: flex;
  height: 100%;
  
}


footer {
  width: 100%;
  height: 40px;
  background-color: #777;
  padding: 0;
  text-align: center;
  color: white;
  grid-area: bottom;
}


@media (max-width: 600px) {
  nav, article {
    width: 100%;
    height: auto;
  }
}
</style>
