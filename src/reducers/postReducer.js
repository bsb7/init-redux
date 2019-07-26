//this is where it's basically going to evaluate any action that are committed, action such as fetching our posts and creating a new post
// for our action we create types, and they are basically just constant


import { FETCH_POSTS, NEW_POST } from '../actions/types';

//create our initial state
const initialState ={
    items:[],
    item: {}
}

//function - this basically evalueates what type that were dealing with. funciton takes in 2 things which is 1. state which gonna be equal to our initial state
//2. action - action will include type, and has to have a type, and that's were evaluating 
//common way to do this is through switch

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_POSTS: 
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}