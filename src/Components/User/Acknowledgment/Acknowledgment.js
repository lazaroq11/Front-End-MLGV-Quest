import React from 'react';
import {Link,useParams} from 'react-router-dom';
import '../Acknowledgment/Acknowledgment.css'





const Acknowledgment = () => {

    const params = useParams();
 
    return (

        <div className="container-box">
        <div className = "container-acknow">
            
            <div className = "container-msgs">
            <h1>Você acabou de responder o exame: {params.exam}!</h1>
            <h1>Agradecemos pela Participação!</h1>
            <h1>Código de sorteio:{params.codigo}</h1>
            <div className = "btnAcknow">
          <Link to="/HomeUser" className="btn-back">Página Principal</Link>
        </div>
            </div>
        </div>
        </div>
        )
}

export default Acknowledgment;
