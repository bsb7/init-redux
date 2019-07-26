import React, {Component} from 'react';

//-- connect - the provider that we brought in from react redux connect also comes from that as well
//-- basically connect - connects you're components to you're redux store that was provided by the provider component 
import { connect } from 'react-redux';

//--
import PropTypes from 'prop-types';

//-- we have an action that we wanna call as well which is the fetchPosts - we need to bring that in too 
import { fetchPosts } from '../actions/postAction';


class Posts extends Component{
    componentWillMount(){
        this.props.fetchPosts();
    }

    // constructor(props){
    //     super(props);
    //     this.state = {
            //--posts is an empty array by default
    //         posts: [] 
    //     }
    // }

    //componentWillMount() - life cycle method
                        // -  this will run right away when the component mount       
    // componentWillMount(){
    //     console.log('123');
        //we can use the fetch() 
        // fetch('https://jsonplaceholder.typicode.com/posts')
            //--fetch() return promise - will give us the result that we need to map into json
            // .then(res => res.json())
            //--another .then() that gives us the data, can console.log the data
            // .then(data => console.log(data)); 
            //--post by default is empty now we put data to the posts array
    //         .then(data => this.setState({posts: data}))
    // }


    //**** */
    //-- another life cycle method
    //-- componentWillReceiveProps - when it receive a new property from a state, this will run and it takes in a parameter of nextProps
    //-- we can access that new post property here wanna check for it, if it's actually there
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}


Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object.isRequired
}




//-- mapStateToProps - get the new item from the state
//-- so we can get the state from redux and map it to properties of the components and then we can use that inside of our component
const mapStateToProps = state =>({
    posts: state.posts.items,
    newPost: state.posts.item
    //-- now we should have this.props.posts
})


//-- in order to connect our component to the redux store instead of just *export default Posts*, 
//-- we actually need to export  *export default connect(null, {fetchPosts})(Posts);* 
//-- connect()() - 1. first parenthesis - (param1, param2) param1. this is where we wanna map our state to our properties, param2. fucntion  , 2. second parenthesis - the component
export default connect(mapStateToProps, {fetchPosts})(Posts);