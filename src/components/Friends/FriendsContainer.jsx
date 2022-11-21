import StoreContext from '../../StoreContext';
import Friends from './Friends';
import classes from './Friends.module.css';
import { deleteFriendActionCreator } from '../../redux/sidebar-reducer';
import { connect } from 'react-redux'



// const FriendsContainer = (props) => {
//     let state = props.store.getState().sidebar;
//     let dispatch = props.store.dispatch;
//     return (
//         <Friends friendsData={state.friendsData} dispatch={dispatch} />
//     )
// }



let mapStateToProps = (state) => {

    return {
        friendsData: state.sidebar.friendsData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        deleteFriend: (id) => {
            dispatch(deleteFriendActionCreator(id));
        }
    }
}
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);


export default FriendsContainer;