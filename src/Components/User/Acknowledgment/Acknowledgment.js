import React from 'react';
import {Link} from 'react-router-dom';
import '../Acknowledgment/Acknowledgment.css'




const Acknowledgment = () => {



    return (
        <div className = "container-acknow">
            <h1>Agradecemos pela Participação!</h1>
        
        <div className = "btnAcknow">
          <Link to="/HomeUser" className="btn-back">Página Principal</Link>
        </div>
        
        </div>
        
        )
}

export default Acknowledgment;
