<script>
    export default{
        name:'Counter'
    }
</script>

<template>
    <h1 :style="{ color: $store.state.colorCode }">{{ $store.state.count }}</h1>
</template>