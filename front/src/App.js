import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './signup';
import Login from './login';
import Home from './home';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <Routes>
         <Route path='/' element={<Login />} />
         <Route path='/signup' element={<Signup />} />
         <Route path='/home' element={<Home/>}/>
        
        
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
