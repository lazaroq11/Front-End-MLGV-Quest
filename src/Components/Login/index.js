import React, {useState, useContext, useCallback, useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
import styles from './styles.module.scss';
import { VscAccount } from "react-icons/vsc";
import { MdLockOutline } from "react-icons/md";
import api from '../../services/api';
import * as auth from '../../services/auth'
import {useAuth} from '../../contexts/auth'





export default function Login(){
    const[email,setEmail] = useState();
    const[password,setPassword] = useState();
    const{ signIn } = useAuth();

  
   
  
    const handleSubmit = useCallback(async(e)=>{
        e.preventDefault();
        try{
        await signIn({email,password});
        }catch(error){
            const message = error.response.status
            if(message===400){
                alert("Usuário ou senha incorretos!")
            }
        }
       
    },[email,password]);




    return (
        <div className= {styles.login}>
           <div className={styles.loginLogo}>
               <Link to="/login"> <img src = "/mlgv.png" alt="mlgvLogo"/></Link>  
               </div>
            
            <div className={styles.loginRight}>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputUserLogin}>
                    
                      <VscAccount/>
                      <input  type="text" id="email" name="email" placeholder="Email"
                      value={email}
                      onChange={e=>setEmail(e.target.value)}/>
                </div>

                <div className={styles.inputPassLogin}>
                      <MdLockOutline/>
                      <input  type="password" placeholder="Senha"
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
    

