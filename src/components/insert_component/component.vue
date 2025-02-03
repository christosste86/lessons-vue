<script>
import ChildComponent from './ChildComponent.vue';

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