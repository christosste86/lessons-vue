<script>
import Counter from './Counter.vue';
import CounterSquared from './CounterSquared.vue';
import IncButtons from './IncButtons.vue';
import IncButtonsFromApi from './IncButtonsFromApi.vue';

	export default {
		/*Object*/
		name: 'Component',
		/*object*/
		components: {
			Counter,
			CounterSquared,
			IncButtons,
			IncButtonsFromApi
		},
		/*Object*/
		computed:{
			colorCode:{
				/*mehod*/
				get() {
				return this.$store.state.colorCode
				},
				/*mehod*/
				set(newValue){
					return this.$store.dispatch('setColorCode', newValue)
				}
			}
			
		}
	}
</script>

<template>
	<Counter />
	<CounterSquared />
	<br/>
	<IncButtons />
	<br/>
	<IncButtonsFromApi />	
	<div>
		<input
		v-model="colorCode"
		placeholder="Enter color code"
		type="text"
	</div>
</template>
