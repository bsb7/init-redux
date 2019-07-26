import { FETCH_POSTS, NEW_POST } from './types';

//*rn- thunk middleware - allows us to actually use or call the dispatch fucntion directly so that we can make an asynchronous request


//-- each action or action creator are gonna be a function that we need to export 
// export function fetchPosts(){
    //-- dispatch - you can kind a think of it as a resolver in a promise whenever we wanna send the data we called dispatch just like if you are in a promise you would call resolve  
    //-- and then pass in whatever you wanna pass in, and in this case it will be the type and it will be the payload if there is any data wanna send
    //-- this is were we wanna create our fetch
    // return function(dispatch){
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
        //-- dispatch the data to the reducer
        //-- dispatch() - takes in the object with the type that we wanna send  
        //-- payload - whatever data is coming in with the type to the reducer i like to call it payload
//         .then(posts => dispatch({
//             type: FETCH_POSTS,
//             payload: posts
//         }));
//     }    
// }

//refactor code above in a cleaner way
export const fetchPosts = () => dispatch =>{
    console.log('fetching');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => 
            dispatch({
                type: FETCH_POSTS,
                payload: posts
        })
    );
};

//-- another action
export const createPost = (postData) => dispatch =>{
    console.log('action called');
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => 
        dispatch({
            type: NEW_POST,
            payload: post
        })
    );
};



