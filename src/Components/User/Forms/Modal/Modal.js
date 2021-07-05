import React, {useEffect, useState}  from 'react';
import {Link, useParams} from 'react-router-dom';
import api from '../../../../services/api';
import './Modal.css';



const Modal = props=>{
   
    const [avaliation, setAvaliation] = useState();
    

    if(!props.show){
        return null
    }

    return (
        <div className = "modal">
            <div className = "modal-content">
              
                <div className = "modal-body">
                    Obrigado pela participação!
                </div>
                <div className = "modal-footer">
                    <button onClick = {props.onClose} className = "btGroup">Não</button>
                </div>
            </div>
        </div>
    )
};

export default Modal