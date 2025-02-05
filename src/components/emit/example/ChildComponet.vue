<script>
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