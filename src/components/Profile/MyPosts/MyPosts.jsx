import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';


const MyPosts = (props) => {

    let postsElements = props.postsData.map(post => <Post message={post.message} likes={post.likes} />)
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={classes.posts}>
            <div className={classes.ptitle}>My posts</div>
            <div className={classes.padd}>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                <button onClick={onAddPost}>Add Post</button>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts;