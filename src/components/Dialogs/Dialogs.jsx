import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/Message';
import classes from './Dialogs.module.css'
import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/message-reducer';


const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messagesElements = props.messageData.map(message => <MessageItem message={message.message} key={message.id} />);

    let sendMessage = () => {
        // props.dispatch(sendMessageActionCreator());
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text);
        // props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea onChange={onMessageChange} value={props.newMessageText} />
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </div >
    )
}

export default Dialogs;