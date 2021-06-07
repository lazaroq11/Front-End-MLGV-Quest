import React, { useState, Fragment } from 'react'
import {AddQuestion} from '../forms/AddQuestion'
import {EditQuestionForm} from '../forms/EditQuestionForm'
import QuestionTable from '../tables/QuestionTable'
import '../../App.css';

const QuestionFluxo = () => {

	const questionsData = []

	const initialFormState = { id: null, name: '', cat: '' }

	const [ questions, setQuestions ] = useState(questionsData)
	const [ currentQuestion, setCurrentQuestion ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	const addQuestion = question => {
		question.id = questions.length + 1
		setQuestions([ ...questions, question ])
	}

	const deleteQuestion = id => {
		setEditing(false)
		setQuestions(questions.filter(question => question.id !== id))
	}

	const updateQuestion = (id, updatedQuestion) => {
		setEditing(false)
		setQuestions(questions.map(question => (question.id === id ? updatedQuestion : question)))
	}

	const editRow = question => {
		setEditing(true)
		setCurrentQuestion({ id: question.id, name: question.name, cat: question.cat })
	}

	return (
		<div className="app">
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h1>Editar Questão</h1>
							<EditQuestionForm
								editing={editing}
								setEditing={setEditing}
								currentQuestion={currentQuestion}
								updateQuestion={updateQuestion}
							/>
						</Fragment>
					) : (
						<Fragment>
							<AddQuestion addQuestion={addQuestion} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<QuestionTable questions={questions} editRow={editRow} deleteQuestion={deleteQuestion} />
				</div>
			</div>
		</div>
	)
}

export default QuestionFluxo;