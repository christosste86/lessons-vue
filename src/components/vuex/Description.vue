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
                counterCode: '',
                counterSquaredCode:'',
                incButtonsCode:'',
                incButtonsFromApiCode:'',
                storeVuexCode:'',

                componentHighlightedCode: '',
                counterHighlightedCode: '',
                counterSquaredHighlightedCode: '',
                incButtonsHighlightedCode: '',
                incButtonsFromApiHighlightedCode: '',
                storeVuexHighlightedCode: '',
            }
        },
        async mounted() {
            const baseUrl = "https://raw.githubusercontent.com/christosste86/lessons-vue/vue/"
            const componetUrl = baseUrl + "src/components/vuex/example/Component.vue";
            const counterUrl = baseUrl + "src/components/state_managment/example/ChildComponent.vue";
            const counterSquaredUrl = baseUrl + "src/components/state_managment/example/ChildComponent.vue";
            const incButtonsUrl = baseUrl + "src/components/state_managment/example/ChildComponent.vue";
            const incButtonsFromApiUrl = baseUrl + "src/components/state_managment/example/ChildComponent.vue";
            const storeVuexUrl = baseUrl + "src/stores/index.js";
            
            try {
                const [response1, response2, response3, response4, response5, response6] = await Promise.all([
                    fetch(componetUrl), 
                    fetch(counterUrl), 
                    fetch(counterSquaredUrl),
                    fetch(incButtonsUrl),
                    fetch(incButtonsFromApiUrl),
                    fetch(storeVuexUrl),
                    
                ]);

                this.componentCode = await response1.text();
                this.counterCode = await response2.text();
                this.counterSquaredCode = await response3.text();
                this.incButtonsCode = await response4.text();
                this.incButtonsFromApiCode = await response5.text();
                this.storeVuexCode = await response6.text();

                this.componentHighlightedCode = hljs.highlight(this.componentCode, { language: 'vue' }).value;
                this.counterHighlightedCode = hljs.highlight(this.childComponentCode, { language: 'vue' }).value;
                this.counterSquaredHighlightedCode = hljs.highlight(this.childComponentCode, { language: 'vue' }).value;
                this.incButtonsHighlightedCode = hljs.highlight(this.childComponentCode, { language: 'vue' }).value;
                this.incButtonsFromApiHighlightedCode = hljs.highlight(this.childComponentCode, { language: 'vue' }).value;
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
<!--Component-->
        <div class="code-container">
            <div class="top">
                <div class="tag">Counter.vue</div>
            </div>
            <div class="code-content" v-if="componentHighlightedCode">
                <pre v-html="counterHighlightedCode"></pre>
            </div>
        </div>
<!--Component-->
        <div class="code-container">
            <div class="top">
                <div class="tag">CounterSquared.vue</div>
            </div>
            <div class="code-content" v-if="componentHighlightedCode">
                <pre v-html="counterSquaredHighlightedCode"></pre>
            </div>
        </div>
<!--Component-->
        <div class="code-container">
            <div class="top">
                <div class="tag">IncButtons.vue</div>
            </div>
            <div class="code-content" v-if="componentHighlightedCode">
                <pre v-html="incButtonsHighlightedCode"></pre>
            </div>
        </div>
<!--Component-->
        <div class="code-container">
            <div class="top">
                <div class="tag">IncButtonsFromApi.vue</div>
            </div>
            <div class="code-content" v-if="componentHighlightedCode">
                <pre v-html="incButtonsFromApiHighlightedCode"></pre>
            </div>
        </div>
<!--Store-->
        <div class="code-container">
            <div class="top">
                <div class="tag">stores/index.js</div>
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