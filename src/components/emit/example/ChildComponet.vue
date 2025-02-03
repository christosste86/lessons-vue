<script>
import ChildComponent from '@/components/insert_component/ChildComponent.vue';

    export default{
        name: 'ChildComponent',
        emits:[
            'close',
        ]
    }
</script>
<template>
    <h2>This is child component</h2>
    <button @click="$emit('close')"></button>
</template>
<style scoped>
</style>