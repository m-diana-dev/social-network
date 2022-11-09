import Friend from './Friend/Friend';
import classes from './Friends.module.css';
const Friends = (props) => {
    let state = props.store.getState().sidebar;
    let friendElements = state.friendsData.map(friend => <Friend id={friend.id} img={friend.img} name={friend.name} dispatch={props.dispatch} />)
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