<script>
import ChildComponent from './childComponent.vue';

  export default {
    name:'component',
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