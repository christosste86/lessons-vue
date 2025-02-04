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
	<ChildComponent>
		<template v-slot:header>
			<h2>This is child component header</h2>
		</template>
		<!--for content we use default becouse slot id without name-->
		<template v-slot:default>
			<p>it is a content</p>
		</template>
		<template v-slot:footer>
			<b>This is footer</b>
		</template>
	</ChildComponent>
</template>
