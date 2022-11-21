import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/message-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagePage.dialogsData,
        messageData: state.messagePage.messageData,
        newMessageText: state.messagePage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        onMessageChange: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;