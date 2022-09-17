import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={classes.posts}>
            <div className={classes.ptitle}>My posts</div>
            <div className={classes.padd}>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <Post message="I love sleeping with my man." likes="15" />
            <Post message="Before you can reach my master, you must pass through me." likes="18" />
        </div>
    )
}

export default MyPosts;