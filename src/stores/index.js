import {createStore} from 'vuex'

export default createStore({
    /*Store all data*/
    state: {
        count: 10,
    },
    /*Get data from state*/
    getters: {
    },
    /*Change the data in the state,
    is not other way. 
    We call the mutations as commit('method')*/
    mutations: {
        inc(state){
            state.count++
        },
        desc(state){
            state.count--
        }
    },
    /*To change data in state we mast call commit in action */
    actions: {
        callWihDelay({commit}) {
            setTimeout(()=>{
                commit('inc')
            },2000)
        }
    },
    /*You can store in multiple modules*/
    modules: {
    }
});