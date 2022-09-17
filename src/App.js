import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Menu />
        <main className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs" element={<Dialogs />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
