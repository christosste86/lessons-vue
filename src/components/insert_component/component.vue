<script>
import ChildComponent from './ChildComponent.vue';

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