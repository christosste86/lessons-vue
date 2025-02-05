<script>
    export default {
        name: 'Component',
        data(){
            return{
                num:1,
                isVisible:true
            }
        }
    }
</script>
<template>
    <!-- with  v-show you can use it if you want to show or not the data -->
    <div v-show="isVisible">
		<h2 v-if="num === 0" >This is zero</h2>
		<h2 v-else-if="num < 0"> This is negative</h2>
		<h2 v-else-if="num > 0"> This is positive</h2>
		<h2 v-else >This is not a number</h2>
	</div>

</template>

<style scoped>

</style>