import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Date from '../Date'
import 'react-datepicker/dist/react-datepicker.css'
import { Radio } from 'react-radio-group'
import { AvaliacoesCadastradas } from '../pages/AvaliacoesCadastradas'


const CopyAvaliationForm = props => {
	const initialFormState = { id: null, cat: '' }
	const [avaliation, setAvaliation ] = useState(initialFormState)
	const [category, setCategory] = useState("Selecione a Categoria");

	const handleInputChange = event => {
		const { cat, value } = event.target
		setAvaliation({ ...avaliation, [cat]: value })
	}

	return (
		<div className="formDiv">
		<form onSubmit={event => {
				event.preventDefault()
				if (!avaliation.cat) return

				props.addAvaliation(avaliation)
				setAvaliation(initialFormState)
			}}
		>
			<h1>Copiar Avaliação</h1>

			<label>Informe o novo periodo</label>
			<Date/>
			
			<label>Escolha uma avaliação para copiar</label><br/>
			<select class="custom-select" onChange={(e) => {
				const selectedCategory = e.target.value;
				setCategory(selectedCategory);
				}}>
					<option value=""></option>
					<option value="1">Avaliação 1</option>
					<option value="2">Avaliação 2</option>
					<option value="3">Avaliação 3</option>
					</select>

			<span value={avaliation.cat=(category)} />

			<br/><br/>
			<button  className="button">Salvar</button>
			<>      </>
			<Link to="/"><button  className="button">Cancelar</button></Link>
		</form>
		</div>
	)
}

