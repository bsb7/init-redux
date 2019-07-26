//what we gonna do here is combined all of our reducers - function to do that needs to be imported
import { combineReducers } from 'redux';
import postReducer from './postReducer';


export default combineReducers({
    //pass in an object with the reducers and we can named it
    posts: postReducer
});

