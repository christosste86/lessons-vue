<script>
    export default{
        name: 'IncButtons'
    }
</script>

<template>
    <button @click="$store.commit('incPlusOne')">Add</button>
	<button @click="$store.commit('incMinusOne')">Sub</button>
</template>