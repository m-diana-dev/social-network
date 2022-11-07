import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/Message';
import classes from './Dialogs.module.css'
import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/message-reducer';


const Dialogs = (props) => {

    let state = props.store.getState().messagePage;
    // let dialogsElements = props.dialogData.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    // let messagesElements = props.dialogData.messageData.map(message => <MessageItem message={message.message} />);
    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = state.messageData.map(message => <MessageItem message={message.message} />);

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea onChange={onMessageChange} value={props.dialogData.newMessageText} />
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </div >
    )
}

export default Dialogs;