import StoreContext from '../../StoreContext';
import FriendContainer from './Friend/FriendContainer';
import classes from './Friends.module.css';
const Friends = (props) => {
    return (
        <StoreContext>{
            (store) => {

                let state = store.getState().sidebar;
                let dispatch = store.dispatch;
                let friendElements = state.friendsData.map(friend => <FriendContainer id={friend.id} img={friend.img} name={friend.name} dispatch={dispatch} />)

                return (
                    <div>
                        <div className={classes.title}>Friends</div>
                        <div className={classes.friends}>
                            {friendElements}
                        </div>
                    </div>
                )
            }
        }

        </StoreContext>
    )
}

export default Friends;