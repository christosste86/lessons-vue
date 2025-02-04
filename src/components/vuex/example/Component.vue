<script>
import ChildComponent from './ChildComponent.vue';
import ButtonVue from './Button.vue';
	export default {
		name: 'Component',
		components: {
			ChildComponent,
			ButtonVue
		},
		data(){
			return{
				count: 0
			}
		}
	}
</script>

<template>
	<ChildComponent :count="count"/>
	<hr/>
	<ButtonVue name="add" @changeCount="count += 1"/>
	<ButtonVue name="sub" @changeCount="count -= 1"/>
</template>
