<script>
	export default {
		name: 'Component',
	}
</script>

<template>
	<h1>{{ $store.state.count }}</h1>
	<br/>
	<button @click="$store.commit('inc')">Add</button>
	<button @click="$store.commit('desc')">Sub</button>
</template>
