<script>
import hljs from 'highlight.js';
import vue from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/github-dark.css';

hljs.registerLanguage('vue', vue);

import Component from './example/Component.vue';
import ChildComponent from './example/ChildComponent.vue';

    export default {
        name: 'Desciption',
        components: {
            Component,
            ChildComponent,
        },
        data(){
            return{
                componentCode: '',
                childComponentCode: '',

                componentHighlightedCode: '',
                childComponentHighlightedCode: '',
            }
        },
        async mounted() {
            const baseUrl = "https://raw.githubusercontent.com/christosste86/lessons-vue/vue/"
            const componetUrl = baseUrl + "src/components/emit/example/Component.vue";
            const childComponentUrl = baseUrl + "src/components/emit/example/ChildComponet.vue";
            try {
                const [response1, response2] = await Promise.all([fetch(componetUrl), fetch(childComponentUrl)]);

                this.componentCode = await response1.text();
                this.childComponentCode = await response2.text();

                this.componentHighlightedCode = hljs.highlight(this.componentCode, { language: 'vue' }).value;
                this.childComponentHighlightedCode = hljs.highlight(this.childComponentCode, { language: 'vue' }).value;

            } catch (error) {
                console.error("Error fetching code:", error);
            }
        },
    }
</script>
<template>
<!--description-->
    <div class="description">
        
    </div>
<!--Component-->  
    <div class="code">
        <div class="code-container">
            <div class="top">
                <div class="tag">Component.vue</div>
            </div>
            <div class="code-content" v-if="componentHighlightedCode">
                <pre v-html="componentHighlightedCode"></pre>
            </div>
        </div>
<!--Child Component-->
        <div class="code-container">
            <div class="top">
                <div class="tag">ChildComponent.vue</div>
            </div>
            <div class="code-content" v-if="childComponentHighlightedCode">
                <pre v-html="childComponentHighlightedCode"></pre>
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