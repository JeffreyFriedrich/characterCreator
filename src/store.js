import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    //immutable object
    state: {
      message: 'Hello World',
      race: ''
    },
    //functions that mutate store
    mutations: {
      changeMessage (state, newMessage) {
        state.message = newMessage;
      },
      changeRace (state, selectedRace) {
        state.race = selectedRace;
      }
    },
    //similar to mutations
    actions: {
      
    },
    //returns computed values
    getters: {
      logMessage: (state, getters) => {
        return state.message
      },
      getRace: (state, getters) => {
        return state.race;
      }
    }
  })