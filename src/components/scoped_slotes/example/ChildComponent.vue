<script>
	export default {
		name: 'ChildComponent'
	}
</script>

<template>
	<div class="card">
		<div class="header" id = "header">
			<slot name = "header"></slot>
		</div>
		
		<div class="content" id = "content">
			<slot></slot>
		</div>
		
		<div class="footer" id = "footer">
			<slot name="footer"></slot>
		</div>
		
	</div>
</template>
<style scoped>
	.header{
		background-color: #373649;
		color: #ebebeb;
		font-size: 18px;
	}
	.content{
		background-color: #ebebeb;
	}
	.footer{
		background-color: #207e89;
		text-align: center;
		color: white;
	}
</style>
