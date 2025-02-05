import {createStore} from 'vuex'

export default createStore({
    /*Store all data*/
    state: {
        count: 0,
    },
    /*Get data from state*/
    getters: {
    },
    /*Change the data in the state,
    is not other way. 
    We call the mutations as commit('method')*/
    mutations: {
        inc(state, randomNumber){
            state.count++
        },
        desc(state, randomNumber){
            state.count--
        }
    },
    /*To change data in state we mast call commit in action */
    actions: {
        inc({commit}) {
            url = 'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
        }
    },
    /*You can store in multiple modules*/
    modules: {
    }
});