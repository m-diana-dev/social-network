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
            <Route path="/profile" element={<Profile profileData={props.appData.profilePage} dispatch={props.dispatch} />} />
            <Route path="/dialogs/*" element={<Dialogs dialogData={props.appData.messagePage} dispatch={props.dispatch} />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
