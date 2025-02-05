import {createStore} from 'vuex'

export default createStore({
    state: {
        count: 10,
    },
    getters: {
    },
    mutations: {
        inc(state){
            state.count++
        },
        desc(state){
            state.count--
        }
    },
    actions: {
    },
    modules: {
    }
});