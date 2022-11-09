import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/Message';
import classes from './Dialogs.module.css'
import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/message-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

    let state = props.store.getState().messagePage;

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <Dialogs messageData={state.messageData} dialogsData={state.dialogsData} newMessageText={state.newMessageText} sendMessage={sendMessage} onMessageChange={onMessageChange} />
    )
}

export default DialogsContainer;