import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Menu appData={props.appData.sidebar} />
        <main className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile appData={props.appData.profilePage} addPost={props.addPost} />} />
            <Route path="/dialogs/*" element={<Dialogs appData={props.appData.messagePage} />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
