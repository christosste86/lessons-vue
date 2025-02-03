<script>
import ChildComponent from './ChildComponent.vue';

    export default{
        name: 'Component',
        components:{
             ChildComponent,
        },
        data(){
            return{
                name:'Superman',
                isChildComponentVisible:false,
            }
        }
    }
</script>
<template>
    <ChildComponent name = "Sum"/>
    <ChildComponent name = "Christos"/>
    <ChildComponent :name = "name"/>
</template>
    
<style scoped>
</style>