<script>
    export default{
        name: 'Component',
        data(){
            return{
                count:0,
            }
        },
        methods: {
            increment(num) {
                this.count += num;
            },
            decrement(num) {
                this.count -= num;
            }
        }
    }
</script>
<template>
	
	<!-- v-on:click we can use and @click -->
	
	<p>{{ count }}</p>
	<button v-on:click="increment(1)">add</button>
	<button @click="decrement(1)">sub</button>

</template>