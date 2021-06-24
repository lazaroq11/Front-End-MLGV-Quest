import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import AuthRoutes from '../routes/auth.routes'



const Routes = () => {
       
    return(
      <>
       <BrowserRouter>
      <AuthRoutes/>
      </BrowserRouter>
      </>
    ) 

}

export default Routes