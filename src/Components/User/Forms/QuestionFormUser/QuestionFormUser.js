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
	const [subject,setSubject] = useState([]);
	const [novoId, setNovoId] = useState();
	let id;
	const[avaliationName, setAvaliationName]= useState([]);
	const[codigo,setCodigo] = useState();
	const[exam,setExam] = useState();
	

	

	useEffect(()=>{
		api.get(`/questionanswer/${params.exam_id}`).then(response=>{
		  setGroupsAnswer(response.data);
		});
		
	  },[]);

	  
	useEffect(()=>{
		api.get("/subject").then(response=>{
		  setSubject(response.data);
      

		});
		
	  },[]);
      
	  useEffect(()=>{
		  const response = api.get(`/exam/${params.exam_id}`).then(response=>{
		  setAvaliationName(response.data);
	

		});
	  },[]);
	  

	  function LotGroupsAnswer(agreement_id, score,isClass,question_id,class_id){
        const findAnswer = vectorAnswer.find(answer=>answer.question_id === question_id)
		if(findAnswer){
			const index = vectorAnswer.findIndex(answer=>answer.question_id === question_id)
		   vectorAnswer[index].score = score;
		}else{
			const answer = {agreement_id,score,isClass,question_id,class_id}
			vectorAnswer.push(answer); 
			setAnswer(vectorAnswer);
          
			 
		}console.log(vectorAnswer)	     
	}
 
	  async function PostAnswer(e){
		e.preventDefault();
		
	   const response = await api.post("/answer",{
		answer:vectorAnswer,
		comment
		
		
		});
		console.log(vectorAnswer);	
	
	     setCodigo(response.data.codigo);
		 setExam(response.data.exam);
		 const {length} = vectorAnswer
		 for(let i = 0; i<length; i++){
			 vectorAnswer.pop();
		 }
		 
	
		history.push(`/Acknowledgment/${response.data.codigo}/${response.data.exam}`);
		
	}
	

	function nameQuestion(index,question_id){
        if(index === 0){
			index = 0.5;
		}
		const id = index + question_id;
		
		return id
	}

	
   
	return (
		
	 	<div className = "containerForm">
			 <form className="form" onSubmit={PostAnswer}>
				 
		
		<div className='questionForm2'>
			<div className="avTitle">
		    <p>Avaliação: {avaliationName.title}</p>
			</div>
		{groupsAnswer.map(group=>(
		
				
				<div className="groupTable">
					
				
				{group.classs == true ? subject.map((subjects,index)=>(
                  
				
				<div className="cellGrid">
			  
				<div className="classTitle">
				<p>Referente a disciplina: {subjects.title}</p>
				</div>
				
				<p>Grupo de questão: {group.title}</p>
				
				{group.questions.map(questions=>(
			  		 	
				<div className = "questionContainer" >
					
			    
				<p className="questionRequired">{questions.required === true?'*':''}</p>
				<p className="question">Questão: {questions.statement}</p>
                
				<label for = "answer">Resposta:</label>
                
				<label for = "radio-1">1 </label>
			   <input onChange = {(event)=>setScore(event.target.value)} required={questions.required==true} onClick = {() => LotGroupsAnswer(params.agreement_id, 1, group.classs,questions.id,subjects.class_id)} value={1} className="optionType" type="radio" name={nameQuestion(index,questions.id)}  />
			     
			   <label for = "radio-2">2 </label>	
			   <input onChange = {(event)=>setScore(event.target.value)} required={questions.required==true} onClick = {() => LotGroupsAnswer(params.agreement_id, 2, group.classs,questions.id,subjects.class_id)} value={2} className="optionType" type="radio" name={nameQuestion(index,questions.id)}   />	
			   
			   <label for = "radio-3">3 </label>	
			   <input onChange = {(event)=>setScore(event.target.value)} required={questions.required==true} onClick = {() => LotGroupsAnswer(params.agreement_id, 3, group.classs,questions.id,subjects.class_id)} value={3} className="optionType" type="radio" name={nameQuestion(index,questions.id)} />
			   
			   <label for = "radio-4">4 </label>	
			   <input onChange = {(event)=>setScore(event.target.value)} required={questions.required==true} onClick = {() => LotGroupsAnswer(params.agreement_id, 4, group.classs,questions.id,subjects.class_id)} value={4} className="optionType" type="radio" name={nameQuestion(index,questions.id)} />
			   
			   <label for = "radio-5">5 </label>	
			   <input onChange = {(event)=>setScore(event.target.value)} required={questions.required==true}  onClick = {() => LotGroupsAnswer(params.agreement_id, 5, group.classs,questions.id,subjects.class_id)} value={5} className="optionType" type="radio" name={nameQuestion(index,questions.id)} />  
			  
			   <label for = "radio-5">N/A </label>	
			   <input onChange = {(event)=>setScore(event.target.value)} required={questions.required==true} onClick = {() => LotGroupsAnswer(params.agreement_id, 0, group.classs,questions.id,subjects.class_id)} value={0} className="optionType" type="radio" name={nameQuestion(index,questions.id)} />  	
			   </div>
			    ))}
		 
			  
			    
			   </div>
              )):(
				   <div className="cellGrid">
				<p>Grupo de questão: {group.title}</p>
				
				{group.questions.map(questions=>(
			  		 
				<div className = "questionContainer">
					
				<fieldset required >
				<p className="questionRequired">{questions.required === true?'*':''}</p>
				<p className="question">Questão: {questions.statement}</p>
				
				<label for = "answer">Resposta:</label>
				<label for = "radio-1">1</label>
			   <input onChange = {(event)=>setScore(event.target.value)} required={questions.required==true} onClick = {() => LotGroupsAnswer(params.agreement_id, 1, group.classs,questions.id)} className="optionType" type="radio" value={1} name={questions.id} />
			
			   <label for = "radio-2">2</label>	
			   <input onChange = {(event)=>setScore(event.target.value)} required={questions.required==true} onClick = {() => LotGroupsAnswer(params.agreement_id, 2, group.classs,questions.id)} value={2} className="optionType" type="radio"  name={questions.id}  />	
			   
			   <label for = "radio-3">3</label>	
			   <input onChange = {(event)=>setScore(event.target.value)} required={questions.required==true} onClick = {() => LotGroupsAnswer(params.agreement_id, 3, group.classs,questions.id)} value={3} className="optionType" type="radio"  name={questions.id}  />
			   
			   <label for = "radio-4">4</label>	
			   <input onChange = {(event)=>setScore(event.target.value)} required={questions.required==true} onClick = {() => LotGroupsAnswer(params.agreement_id, 4, group.classs,questions.id)} value={4} className="optionType" type="radio"  name={questions.id} />
			   
			   <label for = "radio-5">5</label>	
			   <input onChange = {(event)=>setScore(event.target.value)} required={questions.required==true}  onClick = {() => LotGroupsAnswer(params.agreement_id, 5, group.classs,questions.id)} value={5} className="optionType" type="radio"  name={questions.id} />  
			  
			   <label for = "radio-5">N/A</label>	
			   <input onChange = {(event)=>setScore(event.target.value)} required={questions.required==true} onClick = {() => LotGroupsAnswer(params.agreement_id, 0, group.classs,questions.id)} value={0} className="optionType" type="radio"  name={questions.id} />  
			   </fieldset>
			   </div>
			    ))} 
			   </div>)}





			
				</div>
					))}				
		</div>
		<div onSubmit={PostAnswer} className = "coments">
			  <label for = "coments" >Comentários:</label>
			  <textarea  onChange={(event)=>setComment(event.target.value)}  cols="30" maxlength="100" rows="5"></textarea>
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
		
	
    
	
	
