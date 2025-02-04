<script>
import Component from './Component.vue';
import component_code_image from '@/assets/images/conditional_rendering/con_ren_props_component.png';


    export default {
        name: 'Code',
        components: {
            Component,
        },
        data(){
            return{
                component_code_image,
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