import { deleteFriendActionCreator } from '../../../redux/sidebar-reducer';
import Friend from './Friend';
const FriendContainer = (props) => {
    let deleteFriend = (friendElement) => {
        props.dispatch(deleteFriendActionCreator(friendElement));

    }

    return (
        <Friend id={props.id} img={props.img} name={props.name} deleteFriend={deleteFriend} />
    )
}

export default FriendContainer;