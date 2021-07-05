import React, { useState, useEffect } from 'react';
import {Link,useParams} from 'react-router-dom';
import {CSVLink} from "react-csv"
import api from '../../services/api';

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

  
 

  useEffect(()=>{
    api.get(`/csv/${params.exam_id}`).then(response=>{
      setCsv(response.data); 
      
    });
  },[]);
  console.log(csv); 
  
 const csvReport = {
    filename: 'Answers.csv',
    headers:headers,
    data:csv
  };


  return (
         <>
          <div className="btAvaliation">
          <Link to="/ShowAvaliation" className="btPlus">Voltar</Link> 
          </div>
         <div className = "formDiv2">
             <h1>Dados</h1>
         </div>
           <div className = "btQuest">
            <button className="btEnviar"><CSVLink  {...csvReport}>Exportar Planilha</CSVLink></button>
         </div>
         </>
  
  );
};

export default Answers;
