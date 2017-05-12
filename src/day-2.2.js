/**
 * Created by intelligrape on 12/5/17.
 */
import {createStore, combineReducers, applyMiddleware} from 'redux';

function userReducer(store = {users: []}, action) {
    switch (action.type){
        case 'FETCH_USER' : return {...store, users: action.data}
        case 'UPDATE_USER' : return {...store, users: action.data}
        default: return store;
    }
}


function controlReducer(store = {loader : false}, action) {
    switch (action.type) {
        case 'Loading' : return {...store, loader:true}
        case 'Loaded': return {...store, loader: false}
        default: return store;
    }
}


const reducers = combineReducers({
    user: userReducer,
    control: controlReducer
});

const logger  = (store) => (next) => (action) => {
    console.log('current fired action is', action.type);
    next(action);
};

const asyncAction  = (store) => (next) => (action) => {
    if(typeof action == 'function') {
        action(store.dispatch);
    }  else{
        next(action);
    }
};

function getUsers() {
    return (dispatch) => {
        dispatch({type: 'Loading'});
        setTimeout(function(){
            dispatch({type: 'Loaded'});
            dispatch({type: 'UPDATE_USER', data: [{name: 'abc', id: 121}, {name:'xyz', id: 321}]})
        }, 100);
    }
}

const middlewares = applyMiddleware(logger, asyncAction);
const store = createStore(reducers, middlewares);
store.subscribe(() => {
   console.log('Store updated: ', store.getState());
});

store.dispatch(getUsers());

