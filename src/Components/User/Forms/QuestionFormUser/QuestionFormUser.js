import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import api from '../../../../services/api';
import AnonimoComponent from '../../../Permission';
import "../QuestionFormUser/questionform.css"


const QuestionFormUser = () => {

	const [groupsAnswer, setGroupsAnswer] = useState([]);
	let [question, setQuestions] = useState([]);
	const [option,setOption] = useState();
	const params = useParams();
     let vectorGroup = [];
	const [vectorQuestion, setVectorQuestion] = useState([]);
	const [comment,showComment] =useState();
    const [a,setA]  = useState([]);

	useEffect(()=>{
		api.get(`/questionanswer/${params.id}`).then(response=>{
		  setGroupsAnswer(response.data);
		  
		});
		
	  },[]);

		
	  async function PostQuest(e){
        e.preventDefault();
        await api.post(`/question/${params.exam_id}/${params.group_id}`,{		
	});
    }
	
        function checkOption(event){
			if(event.target.value && option){
              event.target.value = false
			}
			else if(event.target.value && !option){
				event.target.value = true;
			}
		}

	  

	return (
		
	 	<div className = "containerForm">
		<div className='questionForm2'>
		{groupsAnswer.map(group=>(
				<div className="groupTable">
					<div className="cellGrid">
				<p>{group.title}</p>
			    <form className="form" required={question.required===true}>
				{group.questions.map(questions=>(
				<div className = "questionContainer">
				<p className="question">{questions.statement}</p>
				<fieldset required={question.required===true} id = {questions.statement}>
	
				<label for = "answer">Resposta:</label>
				<label for = "radio-1">1</label>
			   <input onChange = {(event)=>setOption(event.currentTarget.checked)}  value={option} className="optionType" type="radio"  name={questions.statement} />
			
			   <label for = "radio-2">2</label>	
			   <input onChange = {(event)=>setOption(event.currentTarget.checked)}   value={option}  className="optionType" type="radio"  name={questions.statement} />	
			   
			   <label for = "radio-3">3</label>	
			   <input onChange = {(event)=>setOption(event.currentTarget.checked)}   value={option}  className="optionType" type="radio" name={questions.statement} />
			   
			   <label for = "radio-4">4</label>	
			   <input onChange = {(event)=>setOption(event.currentTarget.checked)}  value={option}  className="optionType" type="radio"  name={questions.statement} />
			   
			   <label for = "radio-5">5</label>	
			   <input onChange = {(event)=>setOption(event.currentTarget.checked)} 	value={option}  className="optionType" type="radio" name={questions.statement} />  
			  
			   <label for = "radio-5">N/A</label>	
			   <input onChange = {(event)=>setOption(event.currentTarget.checked)} 	value={option}  className="optionType" type="radio" name={questions.statement} />  
			   </fieldset>
	      
			   </div>
			   ))}	
			   </form>
		
			   </div>
				</div>
					))}				
		</div>
		  <div className = "coments">
			  <label for = "coments">Comentários:</label>
			  <textarea cols="30" rows="5" ></textarea>
		  </div>
          
	
		
		  <div className = "btQuest">
			  <button className = "btEnviar">Enviar</button>
			  <button className = "btCancelar"><Link to="/ShowAvaliationUser">Cancelar</Link></button>
		  </div>
		  
		</div>
	
       

			);
			
	
			};
						
			 
export default QuestionFormUser;
		
	
    
	
	
