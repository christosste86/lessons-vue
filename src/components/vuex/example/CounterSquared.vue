<script>
    export default{
        name: 'CounterSquared'
    }
</script>

<template>
    <h1>{{ $store.state.count }} 
        <sup>2</sup> = {{ $store.getters.counterSquared }}</h1>
</template>