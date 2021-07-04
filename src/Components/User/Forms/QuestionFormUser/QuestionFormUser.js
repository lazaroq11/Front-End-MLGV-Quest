import React, { useState, useEffect } from 'react';
import {Link, useParams,useHistory} from 'react-router-dom';
import api from '../../../../services/api';
import "../QuestionFormUser/questionform.css"


const QuestionFormUser = () => {

	const [groupsAnswer, setGroupsAnswer] = useState([]);
	const params = useParams();
	const history = useHistory();
	let [score,setScore] = useState(); 
	const [isClass, setIsClass] = useState();
	const vectorAnswer = [];
	const vector1 = []

	

	useEffect(()=>{
		api.get(`/questionanswer/${params.id}`).then(response=>{
		  setGroupsAnswer(response.data);
		
		});
	
	  },[]);

    
	function LotGroupsAnswer(agreement_id, score,isClass,question_id){

        const answer = {agreement_id,score,isClass,question_id}
		 vectorAnswer.push(answer); 
		  
	   }
      
	  
          


	   console.log(vectorAnswer)

	 

	  async function PostAnswer(e){
		e.preventDefault();
	   await api.post("/answer",{
		agreement_id:params.agreement_id,   
		score,
        isClass,
		question_id:groupsAnswer[0].questions[0].id
		 
		});	 
	    
		
	    history.push("/Acknowledgment");
	}

	
	  

	return (
		
	 	<div className = "containerForm">
		<div className='questionForm2'>
		{groupsAnswer.map(group=>(
				<div className="groupTable">
				
					
				<div className="cellGrid">
				<p>{group.title}</p>
				{group.questions.map(questions=>(
			    <form className="form" onSubmit={LotGroupsAnswer}>
				<div className = "questionContainer">
				<p className="question">{questions.statement}</p>
				
	            
				<label for = "answer">Resposta:</label>
				<label for = "radio-1">1</label>
			   <input onChange = {(event)=>setScore(event.target.value)}  onClick = {() => LotGroupsAnswer(params.agreement_id, 1, group.classs,questions.id)} className="optionType" type="radio"  name={questions.statement} />
			
			   <label for = "radio-2">2</label>	
			   <input onChange = {(event)=>setScore(event.target.value)}  onClick = {() => LotGroupsAnswer(params.agreement_id, 2, group.classs,questions.id)} value={2} className="optionType" type="radio"  name={questions.statement}  />	
			   
			   <label for = "radio-3">3</label>	
			   <input onChange = {(event)=>setScore(event.target.value)}  onClick = {() => LotGroupsAnswer(params.agreement_id, 3, group.classs,questions.id)} value={3} className="optionType" type="radio"  name={questions.statement}  />
			   
			   <label for = "radio-4">4</label>	
			   <input onChange = {(event)=>setScore(event.target.value)}  onClick = {() => LotGroupsAnswer(params.agreement_id, 4, group.classs,questions.id)} value={4} className="optionType" type="radio"  name={questions.statement} />
			   
			   <label for = "radio-5">5</label>	
			   <input onChange = {(event)=>setScore(event.target.value)}  onClick = {() => LotGroupsAnswer(params.agreement_id, 5, group.classs,questions.id)} value={5} className="optionType" type="radio"  name={questions.statement} />  
			  
			   <label for = "radio-5">N/A</label>	
			   <input onChange = {(event)=>setScore(event.currentTarget.value)}  onClick = {() => LotGroupsAnswer(params.agreement_id, 0, group.classs,questions.id)} value={0} className="optionType" type="radio"  name={questions.statement} />  
			   </div>
			   
			   </form>
			     ))}
		 
			   </div>
				</div>
					))}				
		</div>
		<div className = "coments">
			  <label for = "coments">Comentários:</label>
			  <textarea cols="30" rows="5" ></textarea>
		  </div>		 	
		 <div className = "btQuest">
			  <button className = "btEnviar" onClick={PostAnswer}>Enviar</button>
			  <button className = "btCancelar"><Link to="/ShowAvaliationUser">Cancelar</Link></button>
		  </div>
		  
		</div>
	
       

			);
			
	
			};
						
			 
export default QuestionFormUser;
		
	
    
	
	
