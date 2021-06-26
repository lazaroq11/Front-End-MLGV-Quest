
import React, {useState, useEffect, useContext, useCallback} from 'react';
import {Redirect,Route, RouteProps} from 'react-router-dom';
import {useAuth } from '../contexts/auth';
import api from '../services/api';
import { Link, useHistory, useParams } from 'react-router-dom'



const type = {type:String}
const PrivateRoutes = ({type, ...rest}) =>{
    const [permissions, setPermissions] = useState([]);
     const history = useHistory();
    
    
    const{ userLogged } = useAuth();
  
     
    if(!userLogged()){
        return <Redirect to ="/"/>
    }

   
    
    return (

        permissions ? (<Route {...rest}/>) : <Redirect to ='/'/> 
    );

};

export default PrivateRoutes;