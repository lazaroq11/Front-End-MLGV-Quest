import React, { useState } from 'react';
import "../QuestionFormUser/questionform.css"

export default function QuestionFormUser() {
	const questions = [
		{
      group: 'Estrutura',
			questionText: 'O que você acha da pandemia?',
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
			questionText: 'O que você acha da pandemia?',
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
			questionText: 'O que você acha da pandemia?',
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
			questionText: 'O que você acha da pandemia?',
			answerOptions: [
				{ answerText: '1', },
				{ answerText: '2', },
				{ answerText: '3', },
				{ answerText: '4',  },
        { answerText: '5',  },
			],
		}
	];
  const[currentGroup, setCurrentGroup] = useState();
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  
	const handleAnswerOptionClick = () => {
	

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='questionForm'>
      <div className = "groups">
      <p>Estrutura</p>
      </div>
			{   (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className="buttonAnswer" onClick={() => handleAnswerOptionClick()}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
    
		</div>

    
	);
}