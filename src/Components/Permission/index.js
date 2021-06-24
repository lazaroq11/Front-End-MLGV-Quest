import React, {useEffect,useState} from 'react';
import api from '../../services/api';
   
const[type] = type;

   const Permission = ({type, children}) => {
     const [permissions,setPermissions] = useState([]);

     
    useEffect(()=>{
        async function loadTypes() {
            const response = await api.get('/session');
            const findType = response.data.some(type?.split(',').includes(response))
            setPermissions(findType);

        }
        loadTypes();  
    },[type])

    return (
           <>
            {permissions && children}
           </>
       )
   }
