import React, { useState, useEffect } from 'react';
import {Link, useParams,useHistory} from 'react-router-dom';
import api from '../../../../services/api';
import "../QuestionFormUser/questionform.css"
import vectorAnswer from './VectorAnswer'


const QuestionFormUser = () => {

	const [groupsAnswer, setGroupsAnswer] = useState([]);
	const params = useParams();
	const history = useHistory();
	let [score,setScore] = useState(); 
	const [isClass, setIsClass] = useState();
	const [comment,setComment] = useState();
	const [answer,setAnswer] = useState([]);
	
	

	

	useEffect(()=>{
		api.get(`/questionanswer/${params.id}`).then(response=>{
		  setGroupsAnswer(response.data);
		});
		
	  },[]);
	 

	  function LotGroupsAnswer(agreement_id, score,isClass,question_id){
        const findAnswer = vectorAnswer.find(answer=>answer.question_id === question_id)
		if(findAnswer){
			const index = vectorAnswer.findIndex(answer=>answer.question_id === question_id)
		   vectorAnswer[index].score = score;
		}else{
			const answer = {agreement_id,score,isClass,question_id}
			vectorAnswer.push(answer); 
			setAnswer(vectorAnswer);
			 
		}	     
	}
 
	  async function PostAnswer(e){
		e.preventDefault();
	   await api.post("/answer",{
		answer:vectorAnswer,
		comment
		
		});	 
	    
		
	    history.push("/Acknowledgment");
		 const {length} = vectorAnswer
		 for(let i = 0; i<length; i++){
			 vectorAnswer.pop();
		 }
 		
		
	}

	

	return (
		
	 	<div className = "containerForm">
			 <form className="form" onSubmit={PostAnswer}>
				 
			
		<div className='questionForm2'>
		{groupsAnswer.map(group=>(
				<div className="groupTable">
				
				<div className="cellGrid">
				<p>{group.title}</p>
				
				{group.questions.map(questions=>(
			  		 
				<div className = "questionContainer">
					
				<fieldset required  >
				<p className="questionRequired">{questions.required === true?'*':''}</p>
				<p className="question">{questions.statement}</p>
				
				<label for = "answer">Resposta:</label>
				<label for = "radio-1">1</label>
			   <input onChange = {(event)=>setScore(event.target.value)} required={questions.required==true} onClick = {() => LotGroupsAnswer(params.agreement_id, 1, group.classs,questions.id)} className="optionType" type="radio"  name={questions.statement} />
			
			   <label for = "radio-2">2</label>	
			   <input onChange = {(event)=>setScore(event.target.value)} required={questions.required==true} onClick = {() => LotGroupsAnswer(params.agreement_id, 2, group.classs,questions.id)} value={2} className="optionType" type="radio"  name={questions.statement}  />	
			   
			   <label for = "radio-3">3</label>	
			   <input onChange = {(event)=>setScore(event.target.value)} required={questions.required==true} onClick = {() => LotGroupsAnswer(params.agreement_id, 3, group.classs,questions.id)} value={3} className="optionType" type="radio"  name={questions.statement}  />
			   
			   <label for = "radio-4">4</label>	
			   <input onChange = {(event)=>setScore(event.target.value)} required={questions.required==true} onClick = {() => LotGroupsAnswer(params.agreement_id, 4, group.classs,questions.id)} value={4} className="optionType" type="radio"  name={questions.statement} />
			   
			   <label for = "radio-5">5</label>	
			   <input onChange = {(event)=>setScore(event.target.value)} required={questions.required==true}  onClick = {() => LotGroupsAnswer(params.agreement_id, 5, group.classs,questions.id)} value={5} className="optionType" type="radio"  name={questions.statement} />  
			  
			   <label for = "radio-5">N/A</label>	
			   <input onChange = {(event)=>setScore(event.target.value)} required={questions.required==true} onClick = {() => LotGroupsAnswer(params.agreement_id, 0, group.classs,questions.id)} value={0} className="optionType" type="radio"  name={questions.statement} />  
			   </fieldset>
			   </div>
			    ))}
		 
			  
			    
			   </div>
				</div>
					))}				
		</div>
		<div onSubmit={PostAnswer} className = "coments">
			  <label for = "coments" >Comentários:</label>
			  <textarea  onChange={(event)=>setComment(event.target.value)}  cols="30" rows="5"></textarea>
		  </div>		 	
		 <div className = "btQuest">
			  <button className = "btEnviar">Enviar</button>
			  <button className = "btCancelar"><Link to="/ShowAvaliationUser">Cancelar</Link></button>
		  </div>
		
		  </form>
		</div>
	
       

			);
			
	
			};
						
			 
export default QuestionFormUser;
		
	
    
	
	
