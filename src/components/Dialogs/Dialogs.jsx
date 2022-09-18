import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: "Dima" },
        { id: 2, name: "Bobik" },
        { id: 3, name: "Barsik" },
        { id: 4, name: "Roma" },
        { id: 5, name: "Margo" },
    ]

    let messageData = [
        { id: 1, message: "Hi!" },
        { id: 2, message: "Good morning, dog" },
        { id: 3, message: "Go to the yard" },
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
            </div>
            <div className={classes.messages}>
                <MessageItem message={messageData[0].message} />
                <MessageItem message={messageData[1].message} />
                <MessageItem message={messageData[2].message} />
            </div>
        </div >
    )
}

export default Dialogs;