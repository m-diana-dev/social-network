import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let postData = [
        { id: 1, message: 'I love sleeping with my man.', likes: 15 },
        { id: 2, message: 'Before you can reach my master, you must pass through me.', likes: 18 },
    ]

    return (
        <div className={classes.posts}>
            <div className={classes.ptitle}>My posts</div>
            <div className={classes.padd}>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <Post message={postData[0].message} likes={postData[0].likes} />
            <Post message={postData[1].message} likes={postData[1].likes} />
        </div>
    )
}

export default MyPosts;