import React, {useEffect, useState}  from 'react';
import {Link, useParams} from 'react-router-dom';
import api from '../../../../services/api';
import './Modal.css';



const Modal = props=>{
   
    const [avaliation, setAvaliation] = useState();
    

    useEffect(()=>{
        api.get(`/exam`).then(response=>{
        setAvaliation(response.data);
          });

    },[]);

    if(!props.show){
        return null
    }

    return (
        <div className = "modal">
            <div className = "modal-content">
              
                <div className = "modal-body">
                    Confirma Participação no Questionário?
                </div>
                <div className = "modal-footer">
                  <Link to ={`/QuestionFormUser/${avaliation.id}`} className="btGroup" >Sim</Link>     
                    <button onClick = {props.onClose} className = "btGroup"> Não</button>
                </div>
            </div>
        </div>
    )
};

export default Modal