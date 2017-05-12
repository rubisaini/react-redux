/**
 * Created by intelligrape on 12/5/17.
 */
import {createStore, combineReducers} from 'redux';



function reducerA(store = {}, action) {
    switch (action.type){
        case 'SUM' : return {...store, result: action.arg1 + action.arg2}
        case 'SUB' : return {...store, result: action.arg1 - action.arg2}
        case 'MUL' : return {...store, result: action.arg1 * action.arg2}
        default: return store;
    }
}

function reducerB(store = {}, action) {
    switch (action.type){
        case 'SUM' : return {...store, result: action.arg1 + action.arg2 + action.arg3}
        case 'MUL' : return {...store, result: action.arg1 * action.arg2 * action.arg3}
        default: return store
    }
}

const reducers = combineReducers({
    smallCall: reducerA,
    largeCall: reducerB
});

const store = createStore(reducers);

store.subscribe(()=> {
   console.log('Result is: ', store.getState());
});

store.dispatch({type: 'SUM', arg1: 12, arg2: 2});
store.dispatch({type: 'SUB', arg1: 30, arg2: 10});
store.dispatch({type: 'MUL', arg1: 2, arg2: 3});
store.dispatch({type: 'MUL', arg1: 2, arg2: 3, arg3: 2});
store.dispatch({type: 'SUM', arg1: 2, arg2: 3, arg3: 5});
