<script>
	export default {
		name: 'Component',
        data(){
            return{
                name: 'Sam',
				greeting: 'Hello',
				question: 'How are you?',
				htmlData: "</b>I am HTML</b>",
				id: 'new',
				style: {
					color: 'red',
					backgroundColor: 'black'
				}
            }
        }
		
	}
</script>

<template>
	<p> {{ greeting }} {{ name }}</p>
	<p v-text="question"></p>
	<p v-html="htmlData" v-bind:id="new" :class="id" :style="style" ></p>
</template>
