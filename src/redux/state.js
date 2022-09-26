let store = {
    _callSubscriber() {
        console.log('state change');
    },
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

    getState() {
        return this._state;
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likes: 0
        };
        this._state.profilePage.postsData.unshift(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    sendMessage() {
        let newMessage = {
            id: 5,
            message: this._state.messagePage.newMessageText,
        };
        if (newMessage.message) {
            this._state.messagePage.messageData.push(newMessage);
            this._state.messagePage.newMessageText = '';
            this._callSubscriber(this._state);
        }
    },

    updateNewMessageText(newText) {
        this._state.messagePage.newMessageText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer
    }
}



export default store;