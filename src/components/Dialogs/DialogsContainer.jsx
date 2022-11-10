import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/Message';
import classes from './Dialogs.module.css'
import React from 'react';
import StoreContext from '../../StoreContext';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/message-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState().messagePage;
                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                }
                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text));
                }
                return <Dialogs messageData={state.messageData} dialogsData={state.dialogsData} newMessageText={state.newMessageText} sendMessage={sendMessage} onMessageChange={onMessageChange} />
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;