import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import styles from './styles.module.scss';
import { VscAccount } from "react-icons/vsc";
import { MdLockOutline } from "react-icons/md";
import api from '../../services/api';




export default function Login({history}){

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState();

    async function handleSubmit(e){
        e.preventDefault();
    
    await api.post('/session',{
        email,
        password,
    });
       
    history.push("/Home");
   
    }



    return (
        <div className= {styles.login}>
           <div className={styles.loginLogo}>
               <Link to="/login"> <img src = "/mlgv.png" alt="mlgvLogo"/></Link>  
               </div>
            
            <div className={styles.loginRight}>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputUserLogin}>
                    
                      <VscAccount/>
                      <input required type="text" id="email" name="email" placeholder="Email"
                      value={email}
                      onChange={e=>setEmail(e.target.value)}/>
                </div>

                <div className={styles.inputPassLogin}>
                      <MdLockOutline/>
                      <input required type="password" placeholder="Senha"
                      value={password}
                      onChange={e=>setPassword(e.target.value)} />
                </div>

                <button type="submit" class ="botao">
                    Acessar
                </button>
                </form>
            </div>

            <footer class="footerSi">Copyright©2021,MLGV. Todos os direitos reservados</footer>
        </div>
    );
}
    

