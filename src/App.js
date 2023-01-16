import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  
  const { customer } = useAuthContext();
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='webpages'>
          <Routes>
            <Route 
              path='/' 
              element={ customer ? <Home /> : <Navigate to="/login" /> } 
            />
            <Route 
              path='/login' 
              element={ !customer ? <Login /> : <Navigate to="/" /> } 
            />
            <Route 
              path='/signup' 
              element={ !customer ? <SignUp /> : <Navigate to="/" /> } 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
