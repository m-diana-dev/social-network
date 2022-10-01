import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/Message';
import classes from './Dialogs.module.css'
import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';


const Dialogs = (props) => {

    let dialogsElements = props.dialogData.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.dialogData.messageData.map(message => <MessageItem message={message.message} />);

    let newMessageElement = React.createRef();
    let sendMessage = () => {
        // props.sendMessage();
        props.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        // props.updateNewMessageText(text);
        // let action = { type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text }
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogData.newMessageText} />
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </div >
    )
}

export default Dialogs;