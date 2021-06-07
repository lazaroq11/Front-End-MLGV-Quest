import React, { useState, Fragment } from 'react'
import '../../App.css';
import ShowAvaliationTable from '../tables/ShowAvaliationTable';
import AvaliationTable from '../tables/AvaliationTable'

export default function AvaliacoesCadastradas(){
	const avaliationsData = []
	const initialFormState = { id: null, name: '', descripition: '', an: '' }
	const [ currentAvaliation, setCurrentAvaliation ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)
	const addAvaliation = avaliation => {
		avaliation.id = avaliations.length + 1
		setAvaliations([ ...avaliations, avaliation ])
	}


	const updateAvaliation = (id, updatedAvaliation) => {
		setEditing(false)
		setAvaliations(avaliations.map(avaliation => (avaliation.id === id ? updatedAvaliation : avaliation)))
		    
	}

	const editRow = avaliation => {
		setEditing(true) 
		setCurrentAvaliation({ id: avaliation.id, name: avaliation.name, an: avaliation.an })
	}




	const deleteAvaliation = id => {
		setEditing(false)
		setAvaliations(avaliations.filter(avaliation => avaliation.id !== id))
	}

	const [ avaliations, setAvaliations ] = useState(avaliationsData)
             
	return (
		<div className="app">
			<div className="flex-row">
				<div className="flex-large">
				<h1>Avaliações Cadastradas</h1>		
				</div>
			</div>
			<div className="flex-large">
					<AvaliationTable avaliations={avaliations} editRow={editRow} deleteAvaliation={deleteAvaliation} />
				</div>
		</div>

		
	)
}

