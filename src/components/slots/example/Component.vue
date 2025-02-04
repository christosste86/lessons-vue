<script>
import ChildComponent from './ChildComponent.vue';
	export default {
		name: 'Component',
		components: {
			ChildComponent,
		}
	}
</script>

<template>
	<!--Slot example-->
	<ChildComponent>This is our first slot</ChildComponent>
</template>
