<script>
import Component from './Component.vue';
import ChildComponent from './ChildComponent.vue';
import component_code_image from '@/assets/images/insert_component/insert_component_component_image.png';
import child_component_code_image from '@/assets/images/insert_component/insert_component_child_component_image.png';

    export default {
        name: 'Code',
        components: {
            Component,
            ChildComponent,
        },
        data(){
            return{
                component_code_image,
                child_component_code_image,
            }
        }

    }
</script>
<template>
<div class="code">
    <div class="code-container">
        <div class="top">
            <div class="tag">Component</div>
        </div>
        <div class="code-content">
            <img :src="component_code_image" alt="component code">
        </div>
    </div>
<!--Child Component-->
    <div class="code-container">
        <div class="top">
            <div class="tag">ChildComponent</div>
        </div>
        <div class="code-content">
            <img :src="child_component_code_image" alt="child component code">
        </div>
    </div>


    <div class="container">
        <div class="top">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
        <div class="content">
            <Component />
        </div>
    </div>
</div>
</template>

<style scoped>

</style>