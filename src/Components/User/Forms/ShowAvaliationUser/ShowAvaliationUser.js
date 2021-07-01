import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import { IconContext } from 'react-icons';
import api from "../../../../services/api"
import Container from './Container';
import AccordionSection from './AccordionSection';
import Wrap from './Wrap';
import Dropdown from './Dropdown';



const ShowAvaliationUser = () => {
  const params = useParams();
  const [avaliations, setAvaliations] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(()=>{
    api.get('/exam').then(response=>{
      setAvaliations(response.data);
      
    });
  },[]);


  async function handleShowAvaliation(id) {
    const idResponse = await api.post(`/posts/${id}`);
    if (idResponse.status === 204){
      setAvaliations(avaliations.filter(avaliation => avaliation.id !== id));
    }
  }

  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked name is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  
   
  return (
    
    <IconContext.Provider value={{ color: '#00FFB9', size: '15px' }}>
        <div className="formDiv2">    
		<h1>Avaliações</h1>
    </div>
    
    <AccordionSection>
      <Container>
      {avaliations.map(avaliation =>{
            return (
              <>
                <Wrap onClick={() => toggle(avaliation.title)} key={avaliation.title}>
                  <h1>{avaliation.title}</h1>        
                </Wrap>

                {clicked === avaliation.title ? (
                  <Dropdown>
                    <p>Nome: {avaliation.title}</p>
                    <p>Descrição: {avaliation.description}</p>
                    <p>Data de Inicio: {avaliation.started_at}</p>
                    <p>Data Final: {avaliation.ended_at}</p>
                    <Link to={`/Terms/${avaliation.id}`} className="btGroup">Responder</Link>
                   </Dropdown>
                   
                ) : null}
              </>
              
            );
                   
          
          })}
          
          
        </Container>
      </AccordionSection>
    </IconContext.Provider>
   
  );
};

export default ShowAvaliationUser;
