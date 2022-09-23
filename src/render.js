import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost } from './redux/state';
import { updateNewPostText } from './redux/state';
import { sendMessage } from './redux/state';
import { updateNewMessageText } from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App appData={state} addPost={addPost} updateNewPostText={updateNewPostText} sendMessage={sendMessage} updateNewMessageText={updateNewMessageText} />
    </React.StrictMode>
  );
}

