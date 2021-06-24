import { response } from 'express';
import React, {useState, useEffect, useContext, useCallback} from 'react';
import {Redirect,Route, RouteProps} from 'react-router-dom';
import { AuthContext } from '../contexts/auth';
import api from '../services/api';
import { Link, useHistory, useParams } from 'react-router-dom'


const type = {type:String}
const PrivateRoutes = ({type, ...rest}) =>{
    const [permissions, setPermissions] = useState([]);
    const{userLogged} = useContext(AuthContext);
    const history = useHistory();
   

    useEffect(()=>{
        async function loadTypes() {
            const response = await api.get('/session');
            const findType = response.data.some(type?.split(',').includes(response))
            setPermissions(findType);

            console.log(response);

        }
        loadTypes();  
    },[])
    console.log(userLogged());
  
     
    if(!userLogged()) {
        return <Redirect to="/"/>
    }
 
    if(type == "manager"){
     history.push('/Home');
    }
    
    return (

        permissions ? (<Route {...rest}/>) : <Redirect to ='/'/> 
    );

};

export default PrivateRoutes;