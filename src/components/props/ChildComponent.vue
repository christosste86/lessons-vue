<script>
import ChildComponent from '../insert_component/example/ChildComponent.vue';

    export default {
        name: 'ChildComponent',
        props: ['name']
    }
</script>
<template>
    <h2>Hello {{ name }}</h2>
</template>