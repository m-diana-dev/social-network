const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData:
        [
            { id: 1, message: 'I love sleeping with my man.', likes: 15 },
            { id: 2, message: 'Before you can reach my master, you must pass through me.', likes: 18 },
        ],
    newPostText: "Hello!"
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                postsData: [
                    {
                        id: 5,
                        message: state.newPostText,
                        likes: 0
                    },
                    ...state.postsData
                ]
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer;