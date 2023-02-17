import logo from './logo.svg';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import ForgotPassword from './components/pages/ForgotPassword';
import Offers from './components/pages/Offers';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';
import Header from './components/Header';


function App() {
  return (
    <>
    <Header/>
    <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/offers' element={<Offers/>} />
           <Route path='/sign-up' element={<Signup/>} />
           <Route path='/profile' element={<Profile/>} />
          <Route path='/sign-in' element={<Signin/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          
           
          

        </Routes>

    </>
    
      
        
   
      
     
    
  );
}

export default App;
