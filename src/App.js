import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/home'
import Contact from './pages/contact'
import Services from './pages/services'
import './App.css';
import List from './pages/list'
import Radium1 from './pages/radium'
import Page1 from './pages/page1'
import Comments from './pages/comment'
import EnhancedLikes from './pages/like'
import Nav from './pages/navbar';
import { MovieProvider } from './pages/Moviecontext';
import AddMovie from './pages/Addmovies';
import MovieList from './pages/MovieList';

function App() {
  return (
    <div className="App">
        <Nav/>
        <MovieProvider>
      <div>
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
    <Comments/>
    <EnhancedLikes/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/page1' element={<Page1/>}/>
      </Routes>
      </BrowserRouter>
      <List/>
      <Radium1/>
    </div>
  );
}

export default App;
