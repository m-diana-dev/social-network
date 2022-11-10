import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }
                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                }
                return <MyPosts postsData={store.getState().profilePage.postsData} newPostText={state.profilePage.newPostText} updateNewPostText={onPostChange} addPost={addPost} />
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;