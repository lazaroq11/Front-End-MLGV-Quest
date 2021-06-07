import React, {useEffect,useState} from 'react';
import {Responsive , WidthProvider }  from 'react-grid-layout';
import {Link, useParams} from 'react-router-dom';
import styled from 'styled-components';
import { MdDelete } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import EditAvaliationForm from '../forms/EditAvaliationForm';
import {AiOutlinePlus} from "react-icons/ai";
import api from '../../services/api';


export const QuestionsContainer = styled.div `
    max-width: 1800px;
    position: relative;
    margin-top: 12px;
    width: 100%;

    .box-info{
      background-color: black;
      width: 400px !important;
        border-radius: 6px;
        align-items: center;
        padding: 15px;
        justify-content: center;
        position: relative;
        cursor:grabbing;
        display:inline-block;
        transition: all ease 0.4s;
        transform:scale(0.9);
       
        :hover{
          transform:scale(1);
        }
        
        a{
            font-size: 14px;
            text-decoration:none;
            position:absolute;
            color:white;
        }
        
        .btEdit{
          position:absolute;
          right:10px;
          top:3px;
          
        }
        
        .btDelete{
          position:absolute;
          right:10px;
          top:29px;
        }

        p{
            font-size: 14px;
            text-decoration:none;
            position:absolute;
            color:white;
        }
    }

    `;


const DropzoneQuestions = () => {

  const params = useParams();
  const [questions, setQuestions] = useState([]);

  useEffect(()=>{
    api.get(`/question/${params.exam_id}/${params.id}`).then(response=>{
      setQuestions(response.data);
      console.log(response.data)      
    });
  },[]);
 



    
  async function handleRemoveQuestion(id) {
    const deleteResponse = await api.delete(`/question/${id}`);
    if (deleteResponse.status === 204){
      setQuestions(questions.filter(question => question.id !== id));
    }
  }
    // layout is an array of objects, see the demo for more complete usage
    const ResponsiveGridLayout = WidthProvider(Responsive);
    
    return (
      <>
       <div className="btAvaliation">
      <Link to="/questions" className="btPlus">Cadastrar Perguntas<AiOutlinePlus/></Link> 
      </div>
      <div className="formDiv">
      <h1>Grupo de Perguntas</h1>
      </div>
      <QuestionsContainer> 
    <ResponsiveGridLayout
    className="layout" 
    breakpoints={{lg: 10, md: 10, sm: 10, xs: 10, xxs: 10}}
    cols={{lg: 1, md: 1, sm: 1, xs: 1, xxs: 1}} 
    rowHeight={60} 
    width={5} 
    margin= {[70, 25] }
    >

        {questions.map(question =>(
    
        <div className="box-info" key={question.id} data-grid={{x: 0, y: 0, w: 1, h: 1}}> 
        <p>{question.statement}</p>
        
        <p >{question.required}</p> 
        <Link to={`/EditQuestionForm/${params.exam_id}/${params.id}/${question.id}`} title="Editar" className="btEdit"><BiEditAlt/></Link>
        <Link to="/ShowAvaliation" title="Deletar" className="btDelete" onClick={()=>handleRemoveQuestion(question.id)}><MdDelete/></Link> 
      
        </div>
        ))}
    </ResponsiveGridLayout>
    </QuestionsContainer> 

      </>
    )
  }
  
export default DropzoneQuestions;