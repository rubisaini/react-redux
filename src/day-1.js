/**
 * Created by intelligrape on 9/5/17.
 */

import {createStore} from 'redux';

const initStore = {
  counter  : 0,
  app: 'counter-app'
};
function reducer(store = initStore, action){
    switch (action.type) {
        case 'INC' : {
            let counter = store.counter;
            counter += action.data;
            return {...store, counter};
        }
        case 'DEC': {
            let counter = store.counter;
            counter -= action.data;
            return {...store, counter} ;
        }
        default : return store;
    }
}

const store = createStore(reducer);

store.subscribe(() => {
    console.log('store is updated', store.getState());
});

function incrementCounter(data) {
       return {
           type: 'INC',
           data
       }
}

function decrementCounter(data) {
    return {
        type: 'DEC',
        data
    }
}


store.dispatch(incrementCounter(4));
store.dispatch(decrementCounter(2));


