import React, {createContext,useCallback,useState} from 'react';
import api from '../services/api';



const credentials = {email:String,password:String, token:String}
export const AuthContext = createContext(credentials);

export const AuthProvider = ({children}) => {
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


     setToken(token);
     localStorage.setItem("@PermissionToken:token",authenticateToken.token); 

},[]);

      const userLogged = useCallback(()=>{
      const token = localStorage.getItem('@PermissionToken:token');
      if(token){
        return true;
      }
        return false;
      }, [])
    
    return (  
      
      
    <AuthContext.Provider value={{token,signIn, userLogged}}>
    {children}
    </AuthContext.Provider>
  );
};




