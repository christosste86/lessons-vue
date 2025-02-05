<script>
import ChildComponent from './example/ChildComponent.vue';

  export default {
    name:'Component',
      components: {
        ChildComponent
      }
  }
</script>

<template>
    <ChildComponent />
    
</template>

<style scoped>

</style>