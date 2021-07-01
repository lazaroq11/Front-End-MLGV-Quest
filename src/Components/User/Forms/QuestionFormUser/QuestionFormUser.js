import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import api from '../../../../services/api';
import AnonimoComponent from '../../../Permission';
import "../QuestionFormUser/questionform.css"


const QuestionFormUser = () => {
	
  const[currentGroup, setCurrentGroup] = useState();
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [groups, setGroups] = useState([]);
	let [question, setQuestions] = useState([]);
	const [option,setOption] = useState(0);
	const params = useParams();
     let vectorGroup = [];
	let vectorQuestion = [];
	const [comment,showComment] =useState();
    const [a,setA]  = useState([]);

	useEffect(()=>{
		api.get(`/questiongroup/${params.id}`).then(response=>{
		  setGroups(response.data);
		});
		
	  },[]);
      
	  	
	  async function PostQuest(e){
        e.preventDefault();
        await api.post(`/question/${params.exam_id}/${params.group_id}`,{		
	});
    }
	
        
		groups.map(group =>{
		  vectorGroup.push(group.id);
	  })
	  
        
	 vectorGroup.map(vectorGroups =>{
		  api.get(`/question/${params.id}/${vectorGroups}`).then(response=>{
			const data = response.data
			data.map(datas=>{
			const question = {id:datas.id, statement:datas.statement}
			vectorQuestion.push(question);
		
			
        })
			
	});
             
	
}) 
	

  	   
  
	return (
		
	 	<div className = "containerForm">
		<div className='questionForm2'>
		
		
		{groups.map(group=>(
				<div className="groupTable">
				<p className="group">{group.title}</p>

				{a.map(questions=>(
			<form  action = "post"className="form">
				<div className = "questionContainer">
				<p className="question">{questions[0]}</p>
				<label for = "radio-1">1</label>	
			   <input onChange = {(event)=>setOption(event.target.value)} className="optionType" type="radio"  name="option" />
			  
			   <label for = "radio-2">2</label>	
			   <input onChange = {(event)=>setOption(event.target.value)} className="optionType" type="radio"  name="option"/>	
			   
			   <label for = "radio-3">3</label>	
			   <input onChange = {(event)=>setOption(event.target.value)} className="optionType" type="radio" name="option"/>
			   
			   <label for = "radio-4">4</label>	
			   <input onChange = {(event)=>setOption(event.target.value)} className="optionType" type="radio"  name="option"/>
			   
			   <label for = "radio-5">5</label>	
			   <input onChange = {(event)=>setOption(event.target.value)} className="optionType" type="radio" name="option"/>  
			   </div>
			   </form>
			  ))}
	
				</div>
					))}	

                			   
		
			   
		
				
				
		</div>
		  <div className = "coments">
			  <label for = "coments">Comentários:</label>
			  <textarea cols="30" rows="5" placeholder="Faça seu comentário!"></textarea>
		  </div>
          
	
		
		  <div className = "btQuest">
			  <button className = "btEnviar">Enviar</button>
			  <button className = "btCancelar"><Link to="/ShowAvaliationUser" >Cancelar</Link></button>
		  </div>
		  
		</div>
	
       

			);
			
	
			};
						
			 
export default QuestionFormUser;
		
	
    
	
	
