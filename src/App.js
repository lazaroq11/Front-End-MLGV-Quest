import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import './Components/pages/styles/global.scss';
import Routes from '../src/routes/index';
import {AuthProvider} from '../src/contexts/auth'







function App() {
  
  return (
  <>
     <BrowserRouter>
     <AuthProvider>
      <Routes/>
      </AuthProvider>
      </BrowserRouter>
  </>

  
  );  

}

export default App;
