
import React from 'react';
import { BrowserRouter as Router, Route, Routes   } from 'react-router-dom';
import ColorModeSwitcher from './ColorModeSwitcher';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Upload from './components/Upload';
import Videos from './components/Videos';

function App() {
  return (
    <Router>
      <Header/>
     <ColorModeSwitcher/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Videos' element={<Videos />}/>
        <Route path='/Upload' element={<Upload />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/SignUp' element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
   
  );
}

export default App;
