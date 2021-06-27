import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import api from '../../../../services/api';
import "../QuestionFormUser/questionform.css"


const QuestionFormUser = () => {
	const questions = [
		{
      group: 'Estrutura',
			questionText: [
				{question: 'O que você acha da pandemia?'},
				{question: 'O que você acha da pandemia?'},
				{question: 'O que você acha da pandemia?'},
				{question: 'O que você acha da pandemia?'}
			] ,
			answerOptions: [
				{ answerText: '1'},
				{ answerText: '2'},
				{ answerText: '3'},
				{ answerText: '4'},
                { answerText: '5'},
			],
		},
		
		{
			group: 'Estrutura',
				  questionText: [
					  {question: 'O que você acha da pandemia?'},
					  {question: 'O que você acha da pandemia?'},
					  {question: 'O que você acha da pandemia?'},
					  {question: 'O que você acha da pandemia?'}
				  ] ,
				  answerOptions: [
					  { answerText: '1'},
					  { answerText: '2'},
					  { answerText: '3'},
					  { answerText: '4'},
			  { answerText: '5'},
				  ],
			  },

			  {
				group: 'Estrutura',
					  questionText: [
						  {question: 'O que você acha da pandemia?'},
						  {question: 'O que você acha da pandemia?'},
						  {question: 'O que você acha da pandemia?'},
						  {question: 'O que você acha da pandemia?'}
					  ] ,
					  answerOptions: [
						  { answerText: '1'},
						  { answerText: '2'},
						  { answerText: '3'},
						  { answerText: '4'},
				  { answerText: '5'},
					  ],
				  },

				  {
					group: 'Estrutura',
						  questionText: [
							  {question: 'O que você acha da pandemia?'},
							  {question: 'O que você acha da pandemia?'},
							  {question: 'O que você acha da pandemia?'},
							  {question: 'O que você acha da pandemia?'}
						  ] ,
						  answerOptions: [
							  { answerText: '1'},
							  { answerText: '2'},
							  { answerText: '3'},
							  { answerText: '4'},
					  { answerText: '5'},
						  ],
					  }
	];
  const[currentGroup, setCurrentGroup] = useState();
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [groups, setGroups] = useState([]);
	const [question, setQuestions] = useState([]);
	const params = useParams();
	let vectorGroup = [];
	let vectorQuestion = [];

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
	
  
	const handleAnswerOptionClick = () => {
	

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
	<>

	{groups.map(group =>{
	 
	   return (
		<>
		<div className='questionForm'>
      <div className = "groups">
      <p>{group.title}</p>
      </div>
 	
		    		<div className='question-section'>
						<div className='question-count'>
							<span>Pergunta {currentQuestion + 1}</span>/{questions.length}
						</div>
						{questions[currentQuestion].questionText.map((questionTexts) => (
						<div className='question-text'><p>{questionTexts[groups]}</p></div>
						))}
					</div>
			
					<div className='answer-section'>
						
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className="buttonAnswer" onClick={() => handleAnswerOptionClick()}>{answerOption.answerText}</button>
						))}
					</div>

					</div>
					</>	
					
		       );
			})}
        </>
			);
		
			};
						
			 
export default QuestionFormUser;
		
	
    
	
	
