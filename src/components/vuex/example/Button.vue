<script>
    export default {
        name: 'Button',
        emits: ['changeCount'],
        props: ['count','name']
    }
</script>
<template>
    <button @click="$emit('changeCount')">{{ name }}</button>
</template>