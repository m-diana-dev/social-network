import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
    let postsElements = props.postsData.map(post => <Post message={post.message} likes={post.likes} />)
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }
    return (
        <div className={classes.posts}>
            <div className={classes.ptitle}>My posts</div>
            <div className={classes.padd}>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts;