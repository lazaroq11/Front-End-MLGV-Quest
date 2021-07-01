import React, {useEffect,useState} from 'react';
import api from '../../services/api';

const AnonimoComponent = ({allow_anonymous, children}) => {

    const [permissions, setPermissions] = useState([]);

    
  useEffect(()=>{
    api.get('/exam').then(response=>{
      setPermissions(response.data);
    });
    
  },[allow_anonymous]);

  

   



  return<>{permissions && children}</>

}


    
  


export default AnonimoComponent;