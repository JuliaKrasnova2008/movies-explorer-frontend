import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import './App.css';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {

  return (
    <div className="page">
      <div className='page__content'>
        <Routes >
          <Route path="/" element={<Main />} />
          <Route path='/movies' element={
            <ProtectedRoute>
              <Movies />
            </ProtectedRoute>} />
          <Route path='/saved-movies' element={
            <ProtectedRoute>
              <SavedMovies />
            </ProtectedRoute>} />
          <Route path='/profile' element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
