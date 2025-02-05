<script>
import hljs from 'highlight.js';
import vue from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/github-dark.css';

hljs.registerLanguage('vue', vue);

import Component from './example/Component.vue';

    export default {
        name: 'Desciption',
        components: {
            Component,
        },
        data(){
            return{
                componentCode: '',
                childComponentCode: '',
                storeVuex:'',

                componentHighlightedCode: '',
                childComponentHighlightedCode: '',
                storeVuexHighlightedCode: ''
            }
        },
        async mounted() {
            const baseUrl = "https://raw.githubusercontent.com/christosste86/lessons-vue/vue/"
            const componetUrl = baseUrl + "src/components/state_managment/example/Component.vue";
            const childComponentUrl = baseUrl + "src/components/state_managment/example/ChildComponent.vue";
            const storeVuexUrl = baseUrl + "src/components/state_managment/example/Button.vue";
            try {
                const [response1, response2, response3] = await Promise.all([fetch(componetUrl), fetch(childComponentUrl), fetch(storeVuexUrl)]);

                this.componentCode = await response1.text();
                this.childComponentCode = await response2.text();
                this.storeVuexCode = await response3.text();

                this.componentHighlightedCode = hljs.highlight(this.componentCode, { language: 'vue' }).value;
                this.childComponentHighlightedCode = hljs.highlight(this.childComponentCode, { language: 'vue' }).value;
                this.storeVuexHighlightedCode = hljs.highlight(this.storeVuexCode, { language: 'vue' }).value;
            } catch (error) {
                console.error("Error fetching code:", error);
            }
        },
    }
</script>
<template>
<!--description-->
    <div class="description">
        <ul>
            <li>Vuex provides a centralized store for managing the state of your Vue applcation.</li>
            <li>It uses mutations to safely modify state data</li>
            <li>Vuex seamlessly integrates with Vue components, allowing you to access and update state from different parts of your application.</li>
        </ul>
    </div>
    <div class="code">
<!--Component-->
        <div class="code-container">
            <div class="top">
                <div class="tag">Component.vue</div>
            </div>
            <div class="code-content" v-if="componentHighlightedCode">
                <pre v-html="componentHighlightedCode"></pre>
            </div>
        </div>
<!--Store-->
        <div class="code-container">
            <div class="top">
                <div class="tag">Component.vue</div>
            </div>
            <div class="code-content" v-if="componentHighlightedCode">
                <pre v-html="storeVuexHighlightedCode"></pre>
            </div>
        </div>
<!--browser-->
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
    pre {
        padding: 10px;
        border-radius: 5px;
        overflow-x: auto;
        font-family: monospace;
    }
</style>