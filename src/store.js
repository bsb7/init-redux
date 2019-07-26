import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];


//Store is not a class its just an object with a few methods on it.
//Store - we create it using createStore, which takes 3 things 1. root reducers - you may have a lot of reducers and you'll combined all of those together into a root reducer and pass it to you're store,
//2. preloadedState - just you're initial state, 3. enhancer - function

//--add redux extension as enhancer
const store = createStore(rootReducer,
    initialState, 
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    );



export default store;