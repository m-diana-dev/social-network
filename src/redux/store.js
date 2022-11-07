import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            postsData:
                [
                    { id: 1, message: 'I love sleeping with my man.', likes: 15 },
                    { id: 2, message: 'Before you can reach my master, you must pass through me.', likes: 18 },
                ],
            newPostText: "Hello!"
        },
        messagePage: {
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
        },
        sidebar: {
            friendsData: [
                { img: "https://cdn.w600.comps.canstockphoto.ru/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%BF%D0%BE%D0%BF%D1%83%D0%B3%D0%B0%D0%B9-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F_csp52883922.jpg", name: "Roma" },
                { img: "https://cdn.w600.comps.canstockphoto.ru/avatar-%D0%BA%D0%BE%D1%82-%D0%BF%D0%B5%D1%80%D1%81%D0%B8%D0%B4%D1%81%D0%BA%D0%B8%D0%B9-breeds-%D1%80%D0%B8%D1%81%D1%83%D0%BD%D0%BE%D0%BA_csp57717699.jpg", name: "Barsik" },
                { img: "https://img.freepik.com/premium-vector/cute-dog-head-avatar_79416-67.jpg", name: "Margo" }
            ]
        }
    },
    _callSubscriber() {
        console.log('state change');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messageReducer(this._state.messagePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }

}


export default store;