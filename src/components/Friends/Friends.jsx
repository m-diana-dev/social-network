import Friend from './Friend/Friend';
import classes from './Friends.module.css';
const Friends = (props) => {
    let friendElements = props.friendsData.map(friend => <Friend img={friend.img} name={friend.name} />)
    return (
        <div>
            <div className={classes.title}>Friends</div>
            <div className={classes.friends}>
                {friendElements}
            </div>
        </div>
    )
}

export default Friends;