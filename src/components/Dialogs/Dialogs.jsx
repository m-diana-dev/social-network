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

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = messageData.map(message => <MessageItem message={message.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div >
    )
}

export default Dialogs;