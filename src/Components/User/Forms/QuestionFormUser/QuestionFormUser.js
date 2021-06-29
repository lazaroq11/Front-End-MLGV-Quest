import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import api from '../../../../services/api';
import "../QuestionFormUser/questionform.css"


const QuestionFormUser = () => {
	
  const[currentGroup, setCurrentGroup] = useState();
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [groups, setGroups] = useState([]);
	const [question, setQuestions] = useState([]);
	const params = useParams();
	let vectorGroup = [];
	let vectorQuestion = [];
	const [comment,showComment] =useState();

	useEffect(()=>{
		api.get(`/questiongroup/${params.id}`).then(response=>{
		  setGroups(response.data);
		
		});
		
	  },[]);
        
		groups.map(group =>{
			vectorGroup.push(group.id);
		
	  })
	  
	   
	

	  vectorGroup.map(vectorGroups =>{
		
		api.get(`/question/${params.id}/${vectorGroups}`).then(response=>{
			vectorQuestion.push(response.data);
		  });		 
  })
  console.log(vectorQuestion);
	
  
	
	return (
	 	<div className = "containerForm">
		<div className='questionForm2'>
		    	<form  action = "post"className="form">
				<p className="group">Estrutura</p>
				<p className="question"> Estrutura a Distância</p>

				<label for = "radio-1">1</label>	
			   <input className="optionType" type="radio" value="1" name="option" />
			  
			   <label for = "radio-1">2</label>	
			   <input className="optionType" type="radio" value="2" name="option"/>	
			   
			   <label for = "radio-1">3</label>	
			   <input className="optionType" type="radio" value="3" name="option"/>
			   
			   <label for = "radio-1">4</label>	
			   <input className="optionType" type="radio" value="4" name="option"/>
			   
			   <label for = "radio-1">5</label>	
			   <input className="optionType" type="radio" value="5" name="option"/>
			  
				</form>

							
		</div>
		  <div className = "coments">
			  <label for = "coments">Comentários:</label>
			  <textarea cols="30" rows="5" placeholder="Faça seu comentário!"></textarea>
		  </div>

		  <div className = "btQuest">
			  <button className = "btEnviar">Enviar</button>
			  <button className = "btCancelar">Cancelar</button>
		  </div>
		  <footer class="footerSi">Copyright©2021,MLGV. Todos os direitos reservados</footer>
		</div>

		 
			);
		
			};
						
			 
export default QuestionFormUser;
		
	
    
	
	
