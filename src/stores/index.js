import {createStore} from 'vuex'
import axios from 'axios';

export default createStore({
    /*Store all data*/
    state: {
        count: 0,
        colorCode: 'red'
    },
    /*Get data from state*/
    getters: {
        counterSquared(state){
            return state.count * state.count
        }
    },
    /*Change the data in the state,
    is not other way. 
    We call the mutations as commit('method')*/
    mutations: {
        incFromApi(state, randomNumber){
            state.count += randomNumber
        },
        descFromApi(state, randomNumber){
            state.count -= randomNumber
        },

        incPlusOne(state){
            state.count ++
        },
        incMinusOne(state){
            state.count --
        },
        setColorCode(state, newValue){
            state.colorCode = newValue
        }
    },
    /*To change data in state we mast call commit in action */
    actions: {
        incFromApi({commit}) {
            axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
                commit('incFromApi', response.data)
            })
        },
        descFromApi({commit}) {
            axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
                commit('descFromApi', response.data)
            })
        },
        setColorCode({commit}, newValue){
            commit('setColorCode', newValue)
        }
    },
    /*You can store in multiple modules*/
    modules: {
    }
});