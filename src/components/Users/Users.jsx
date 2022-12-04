// import React from "react";
import classes from './Users.module.css';
import axios from "axios";
import userAvatar from '../../assets/images/avatar.jpg'

let Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            // debugger;
            props.setUsers(response.data.items);
        })
    }
    return (
        <div className={classes.users}>
            <h1>Users</h1>
            <div className={classes.usersItems}>
                {
                    props.users.map(user =>
                        <div key={user.id} className={classes.userItem}>
                            <div className={classes.userItemInner}>
                                <img src={user.photos.small != null ? user.photos.small : userAvatar} />
                                <div className={classes.userItemWrapp}>
                                    <a href="#" className={classes.userItemName}>{user.name}</a>
                                    <div className={classes.userItemLocation}><span>{"user.location.country"}</span><span>{"user.location.city"}</span></div>
                                    <div className={classes.userItemStatus}>{user.status}</div>
                                </div>
                            </div>
                            {user.followed
                                ? <button onClick={() => { props.unFollow(user.id) }} className={classes.unfollow}>Unfollow</button>
                                : <button onClick={() => { props.follow(user.id) }} className={classes.follow}>Follow</button>
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Users;