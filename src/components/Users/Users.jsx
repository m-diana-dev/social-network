// import React from "react";
import classes from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                { id: 1, followed: true, img: 'https://www.shutterstock.com/image-vector/cartoon-character-jack-russell-terrier-260nw-579387331.jpg', fullName: 'Bobik', status: 'Uf, uf', location: { country: 'Russia', city: 'Moscow' } },
                { id: 2, followed: true, img: 'https://cdn1.vectorstock.com/i/1000x1000/08/75/cute-yorkshire-terrier-dog-avatar-vector-20670875.jpg', fullName: 'Chappy', status: 'Hello', location: { country: 'Russia', city: 'Omsk' } },
                { id: 3, followed: false, img: 'https://cdn4.iconfinder.com/data/icons/halloween-avatar-flat/64/halloween-33-512.png', fullName: 'Kesha', status: '...', location: { country: 'Russia', city: 'Moscow' } },
                { id: 4, followed: false, img: 'https://cdn3.vectorstock.com/i/1000x1000/15/32/isolated-cute-cat-avatar-vector-21041532.jpg', fullName: 'Murka', status: 'I am a cat', location: { country: 'Russia', city: 'Smolensk' } },
                { id: 5, followed: true, img: 'https://thumbs.dreamstime.com/b/cute-pug-dog-avatar-cute-pug-dog-avatar-vector-illustration-design-114995824.jpg', fullName: 'Bobik', status: 'ZzzzZzz...', location: { country: 'Russia', city: 'Penza' } },
            ]
        );
    }
    return (
        <div className={classes.users}>
            <h1>Users</h1>
            <div className={classes.usersItems}>
                {
                    props.users.map(user =>
                        <div key={user.id} className={classes.userItem}>
                            <div className={classes.userItemInner}>
                                <img src={user.img} />
                                <div className={classes.userItemWrapp}>
                                    <a href="#" className={classes.userItemName}>{user.fullName}</a>
                                    <div className={classes.userItemLocation}><span>{user.location.country}</span><span>{user.location.city}</span></div>
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