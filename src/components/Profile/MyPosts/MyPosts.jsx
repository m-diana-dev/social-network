import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';


const MyPosts = (props) => {

    let postsElements = props.postsData.map(post => <Post message={post.message} likes={post.likes} />)
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }
    return (
        <div className={classes.posts}>
            <div className={classes.ptitle}>My posts</div>
            <div className={classes.padd}>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                <button onClick={addPost}>Add Post</button>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts;