<script>
import ChildComponent from '@/components/insert_component/ChildComponent.vue';
import Component from '@/components/insert_component/Component.vue';

    export default{
        name: 'Component',
        components: {
            ChildComponent,
        },
        data(){
            return{
                isChildComponentVisible:false,
            }
        }
    }
</script>
<template>
    <button @click="isChildComponentVisible = true">Show</button>
    <ChildComponent v-if="isChildComponentVisible" @close="isChildComponentVisible = false"/>
</template>
<style scoped>
    
</style>