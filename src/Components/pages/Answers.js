import React, { useState, useEffect } from 'react';
import {Link,useParams} from 'react-router-dom';
import { AvData } from '../AvData';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { MdDelete } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import {AiOutlinePlus} from "react-icons/ai";
import {dateFormat} from 'dateformat';
import {CSVLink} from "react-csv"

import api from '../../services/api';
import { AiOutlineCopy } from "react-icons/ai";
import { CopyAvaliation } from '../forms/CopyAvaliation';






//instalar styled-components pra fazer a estilização
//está trazendo informaçoes do "AvData", trocar por dados do back
//caso queira acrescentar mais dados só colocar dentro do <dropdown>


const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 80vh;
  background: #fff;

  .btDelete{
  font-size:1.3rem;
       display:flex;
       align-items: center;
       margin-left:10px;
       text-decoration: none;
       color:black;
       transform:scale(0.9);
       transition:all ease 0.4s;
 }
`;

const Container = styled.div`
  position: absolute;
  top: 2%;
  font-weight: bolder;

  .btDelete{
  display: inline-block;
  align-items: left;
  font-size: 24px;
  cursor: pointer;
  height:40px;
  width:40px;
  color:black;
  text-decoration:none;
 
  }

  .btEdit{
    display: inline-block;
  align-items: left;
  font-size: 24px;
  cursor: pointer;
  text-decoration:none; 
  }
   

  .btDelete{
  font-size:1.3rem;
       display:flex;
       align-items: center;
       margin-left:10px;
       text-decoration: none;
       color:black;
       transform:scale(0.9);
       transition:all ease 0.4s;
 }
  
`;

const Wrap = styled.div`
 
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180vh;
  text-align: center;
  cursor: pointer;

  h1{
    font-style: italic;
    padding: 1.5rem;
    font-size: 0.9rem;
    max-width: 220px;
    width:33%; //alterar o width das avaliações 
    font-weight:bolder;
    color:black;
    font-family: Lexend, sans-serif;
  }

  .btDelete{
  font-size:1.3rem;
       display:flex;
       align-items: center;
       margin-left:10px;
       text-decoration: none;
       color:black;
       transform:scale(0.9);
       transition:all ease 0.4s;
 }



  span {
    margin-right: 1.2rem;
  }
`;

const Dropdown = styled.div`
  background-color: var(--gray-50);
  width: 100%;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  margin-left:2%;
  border-bottom: 1px solid #c9c9c9;
  border-top: 1px solid #c9c9c9;
  
  

  .btDelete{
  font-size:1.3rem;
       display:flex;
       align-items: center;
       margin-left:10px;
       text-decoration: none;
       color:black;
       transform:scale(0.9);
       transition:all ease 0.4s;
 }
   
  .btGroup{
    text-decoration:none;
    width:4.8%;
    background-color:black;
    font-weight: 600;
    height: 100px;
    color:white;
    border-radius:8px;
    font-size:15px;
    margin-bottom: 9%;
    border:none;
    outline:none;
    cursor:pointer;
    justify-content: center;
    transform: scale(0.9);
    transition: all ease 0.4s;
    
 
    }

    .btGroup:hover{
      background-color: #171719;
        cursor:pointer;
        border:none;
        outline-width: 0;
        transform: scale(1)

    }
    .btPlanilha {
    text-decoration:none;
    width:10%;
    background-color:black;
    font-weight: 600;
    height: 10%;
    color:white;
    border-radius:8px;
    font-size:15px;
    margin-left:0.1%;
    margin-top:-0.3%;
    margin-bottom:10px;
    border:none;
    outline:none;
    cursor:pointer;
    justify-content: center;
    transform: scale(0.9);
    transition: all ease 0.4s;
    
 
    }

    
    .btPlanilha:hover{
      background-color: #171719;
        cursor:pointer;
        border:none;
        outline-width: 0;
        transform: scale(1)

    }
  

  
  p{
    font-size: 1rem;
    align-items: center;
    justify-content: center;

  }
  .btDelete{
  font-size:1.3rem;
       display:flex;
       align-items: center;
       margin-left:10px;
       text-decoration: none;
       color:black;
       transform:scale(0.9);
       transition:all ease 0.4s;
 }

a{
  text-decoration:none;
  color:white;
}
`;

const data = [
  {groupquestion:"Sistemas",class:"LP1",question:"FIFEIRO",user:"Lázaro",matricula:"07123234345",media:10,coments:"Oi",codigo:1},
  {groupquestion:"Sistemas",class:"LP1",question:"FIFEIRO",user:"Lázaro",matricula:"07123234345",media:10,coments:"Oi",codigo:1}


]

const headers = [
  {label: 'Grupo de Questão',key:'groupquestion'},
  {label: 'Disciplina',key:'class'},
  {label: 'Questão',key:'question'},
  {label: 'Usuário',key:'user'},
  {label: 'Matrícula',key:'matricula'},
  {label: 'Média',key:'media'},
  {label: 'Comentário',key:'coments'},
  {label: 'Código',key:'codigo'}

]


const Answers = () => {

  const [avaliations, setAvaliations] = useState([]);
  const[csv,setCsv] = useState([])
  const params = useParams();
  
  useEffect(()=>{
    api.get('/exam').then(response=>{
      setAvaliations(response.data);
    });
  },[]);

  
  const csvReport = {
    filename: 'Answers.csv',
    headers:headers,
    data:csv
  };

  useEffect(()=>{
    api.get(`/csv/${params.exam_id}`).then(response=>{
      setCsv(response.data);
    });
  },[]);

  
  console.log(csv);
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
   
  async function handleRemoveAvaliation(id) {
    const deleteResponse = await api.delete(`/exam/${id}`);
    if (deleteResponse.status === 204){
      setAvaliations(avaliations.filter(avaliation => avaliation.id !== id));
    }
  }



  return (
       <>
         <div className = "formDiv">
             <h1>Gráficos e Dados</h1>
         </div>
         <div className="btPlanilha">
        <button className="btPlanilha"><CSVLink {...csvReport}>Exportar Planilha</CSVLink></button>
</div> 
</>
  );
};

export default Answers;
