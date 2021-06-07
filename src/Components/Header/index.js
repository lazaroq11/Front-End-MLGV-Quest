import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import {Link} from 'react-router-dom'
import { BiLogOut } from "react-icons/bi";
import styles from  './styles.module.scss';

export function Header(){
    const currentDate = format(new Date(), 'EEEEEE, d, MMMM',{
        locale:ptBR,
    });
    
    return(       
    <header className={styles.headerContainer}>
       <Link to="/Home" className="btDelete"> <img src="/logo.png" alt="MLGV QUEST"/></Link>
      
 
       
      
      
       <span>{currentDate}</span>
       <Link to="/" className="btLogout"><BiLogOut/></Link>
    </header>             
    
    )
}
