import React, {createContext,useCallback,useState,useContext} from 'react';
import {Redirect,Route, RouteProps,useHistory} from 'react-router-dom';
import api from '../services/api';



const credentials = {email:String,password:String, token:String}
export const AuthContext = createContext(credentials);



export const AuthProvider = ({children}) => {
  const history = useHistory();
    const [token,setToken] = useState(()=>{
      const token = localStorage.getItem('@PermissionToken:token');
   

      if(token) {
        api.defaults.headers.authorization = `Bearer ${token}`;

        return {token}
      }

       return{token};
    });
    const signIn = useCallback(async({email,password}) =>{
      
      const response = await api.post('/session',{
        email,
        password,
       
    });
     const {authenticateToken } = response.data;
    
     console.log(authenticateToken.token)
     console.log(authenticateToken.user.type)
     
     if(authenticateToken.user.type === "manager"){
      history.push("/Home")
     }

     if(authenticateToken.user.type === "student"){
       history.push("/HomeUser")
     }

     if(authenticateToken.user.type === "professor"){
       history.push("/HomeUser")
     }

   


     setToken(token);
     localStorage.setItem("@PermissionToken:token",authenticateToken.token);
     localStorage.setItem("@PermissionType:type",authenticateToken.user.type) 

},[token]);

      const userLogged = useCallback(()=>{
     
      const token = localStorage.getItem("@PermissionToken:token");
      const type = localStorage.getItem("@PermissionType:type");
      console.log(type);
      if(token){
        return true;
      }
      
        return false;
           
      }, [])

      console.log(userLogged()) ;  


    
    return (  
      
      
    <AuthContext.Provider value={{token,signIn, userLogged}}>
    {children}
    </AuthContext.Provider>
  );
};

 function useAuth() {
   const context = useContext(AuthContext);
   return context;
 }

 export {useAuth};




