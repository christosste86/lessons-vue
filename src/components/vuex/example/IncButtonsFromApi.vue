<script>
    export default{
        name:'IncButtonsFromApi'
    }
</script>

<template>
    <button @click="$store.dispatch('incFromApi')">+</button>
	<button @click="$store.dispatch('descFromApi')">-</button>
</template>