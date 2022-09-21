import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    // let postsData = [
    //     { id: 1, message: 'I love sleeping with my man.', likes: 15 },
    //     { id: 2, message: 'Before you can reach my master, you must pass through me.', likes: 18 },
    // ]
    // let postsElements = postsData.map(post => <Post message={post.message} likes={post.likes} />)
    return (
        <div className={classes.posts}>
            <div className={classes.ptitle}>My posts</div>
            <div className={classes.padd}>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts;