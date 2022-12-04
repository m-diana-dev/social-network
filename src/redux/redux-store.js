// import { createStore } from "redux";
import { combineReducers, legacy_createStore as createStore } from "redux"
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;