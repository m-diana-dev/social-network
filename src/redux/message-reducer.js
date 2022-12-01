const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
    dialogsData:
        [
            { id: 1, name: "Dima" },
            { id: 2, name: "Bobik" },
            { id: 3, name: "Barsik" },
            { id: 4, name: "Roma" },
            { id: 5, name: "Margo" },
        ],
    messageData:
        [
            { id: 1, message: "Hi!" },
            { id: 2, message: "Good morning, dog" },
            { id: 3, message: "Go to the yard" },
        ],
    newMessageText: "Hello!"
}

const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            };
            let stateCopy = { ...state };
            if (newMessage.message) {
                stateCopy.messageData = [...state.messageData];
                stateCopy.messageData.push(newMessage);
                stateCopy.newMessageText = '';
            }
            return stateCopy;
        case UPDATE_NEW_MESSAGE_TEXT:
            let stateCopy2 = { ...state };
            stateCopy2.newMessageText = action.newText;
            return stateCopy2;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})

export default messageReducer;