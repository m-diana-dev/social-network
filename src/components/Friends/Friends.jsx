import StoreContext from '../../StoreContext';
import classes from './Friends.module.css';


const Friends = (props) => {
    let deleteFriend = (e) => {
        let friendElement = e.target.id;
        console.log(friendElement);
        props.deleteFriend(friendElement);
    }

    let friendElements = props.friendsData.map(friend => {
        return (
            <div key={friend.id} className={classes.friend}>
                <div className={classes.imgWrapp}>
                    <img src={friend.img} className={classes.img} alt="avatar"></img>
                    <button onClick={deleteFriend} className={classes.delete}><img id={friend.id} src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png" alt="delete"></img></button>
                </div>
                <span>{friend.name}</span>
            </div>
        )
    })
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