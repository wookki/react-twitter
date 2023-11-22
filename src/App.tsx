import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<h2>안녕</h2>} />
      <Route path='/posts' element={<h2>안녕</h2>} />
      <Route path='/posts/:id' element={<h2>안녕</h2>} />
      <Route path='/posts/new' element={<h2>안녕</h2>} />
      <Route path='/posts/edit/:id' element={<h2>안녕</h2>} />
      <Route path='/profile' element={<h2>안녕</h2>} />
      <Route path='/profile/edit' element={<h2>안녕</h2>} />
      <Route path='/notifications' element={<h2>안녕</h2>} />
      <Route path='/search' element={<h2>안녕</h2>} />
      <Route path='/users/login' element={<h2>안녕</h2>} />
      <Route path='/users/signup' element={<h2>안녕</h2>} />
      <Route path='*' element={<Navigate replace to='/' />} />
    </Routes>
  );
}

export default App;
