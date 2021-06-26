import React, { useState} from 'react'

import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import {Link, useHistory} from 'react-router-dom'
import { BiLogOut } from "react-icons/bi";
import styles from  './styles.module.scss';
import { login } from "../../services/auth";
import api from '../../services/api';



export function Header(){
    const history = useHistory();
    const currentDate = format(new Date(), 'EEEEEE, d, MMMM',{
        locale:ptBR,
    });

        const handleLogout = () => {
            localStorage.removeItem('@mlgv:TOKEN_KEY');
            history.push('/');
        }
    
    
    return(       
    <header className={styles.headerContainer}>
      
       <Link to="/Home" className="btDelete"> <img src="/logo.png" alt="MLGV QUEST"/></Link>
      
 
       
      
      
       <span>{currentDate}</span>
       <button className="btLogout" onClick={handleLogout}><BiLogOut/></button>
    </header>             
    
    )
}
