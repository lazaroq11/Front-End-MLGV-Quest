import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Image from '../Image';

const AddQuestionForm = props => {
	const initialFormState = { id: null, name: '', cat: '' }
	const [ question, setQuestion ] = useState(initialFormState)
	const [category, setCategory] = useState("");

	const handleInputChange = event => {
		const { name, value } = event.target
		setQuestion({ ...question, [name]: value })
	}

	return (
		<form onSubmit={event => {
				event.preventDefault()
				if (!question.name || !question.cat) return

				props.addQuestion(question)
				setQuestion(initialFormState)
			}}
		>
			<h1>Cadastrar Perguntas</h1><br/><br/>
			<label>Digite a Pergunta</label><br/>
			<input type="text" placeholder="Digite a Pergunta" name="name" className="input" value={question.name} onChange={handleInputChange} />
			<br/><br/>

			<label>Selecione o Grupo </label><br/>
			<select class="custom-select" onChange={(e) => {
				const selectedCategory = e.target.value;
				setCategory(selectedCategory);
				}}>
					<option value=""></option>
					<option value="Grupo 1">Grupo 1</option>
					<option value="Grupo 2">Grupo 2</option>
					<option value="Grupo 3">Grupo 3</option>
					</select>

			<span value={question.cat=(category)} />
			<br/>
			<Image/>
			<br/><br/>
			<button  className="button">Salvar</button>
			<>      </>
			<Link to="/"><button  className="button">Cancelar</button></Link>
		</form>
	)
}

export default AddQuestionForm;
