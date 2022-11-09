import { deleteFriendActionCreator } from '../../../redux/sidebar-reducer';
import classes from './Friend.module.css';
const Friend = (props) => {
    let deleteFriend = (e) => {
        let friendElement = e.target.id;
        props.dispatch(deleteFriendActionCreator(friendElement));
    }

    return (
        <div className={classes.friend}>
            <div className={classes.imgWrapp}>
                <img src={props.img} className={classes.img} alt="avatar"></img>
                <button onClick={deleteFriend} className={classes.delete}><img id={props.id} src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png" alt="delete"></img></button>
            </div>
            <span>{props.name}</span>
        </div>
    )
}

export default Friend;