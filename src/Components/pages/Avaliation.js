import React, { useState, Fragment } from 'react'
import AvaliationTable from '../tables/AvaliationTable'
import '../../App.css';
import {EditAvaliationForm} from '../forms/EditAvaliationForm';
import AvaliacoesCadastradas from './AvaliacoesCadastradas';
import { AddAvaliationform } from '../forms/AddAvaliationForm';



const AddAvaliation = () => {
	const avaliationsData = []
	const initialFormState = { id: null, name: '', descripition: '', an: '' }

	const [ avaliations, setAvaliations ] = useState(avaliationsData)
	const [ currentAvaliation, setCurrentAvaliation ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	const addAvaliation = avaliation => {
		avaliation.id = avaliations.length + 1
		setAvaliations([ ...avaliations, avaliation ])
	}

	const deleteAvaliation = id => {
		setEditing(false)
		setAvaliations(avaliations.filter(avaliation => avaliation.id !== id))
	}

	const updateAvaliation = (id, updatedAvaliation) => {
		setEditing(false)
		setAvaliations(avaliations.map(avaliation => (avaliation.id === id ? updatedAvaliation : avaliation)))
		    
	}

	const editRow = avaliation => {
		setEditing(true) 
		setCurrentAvaliation({ id: avaliation.id, name: avaliation.name, an: avaliation.an })
	}

	return (
		<div className="app">
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h1>Editar Questão</h1>
							<EditAvaliationForm
								editing={editing}
								setEditing={setEditing}
								currentAvaliation={currentAvaliation}
								updateAvaliation={updateAvaliation}
							/>
						</Fragment>
					) : (
						<Fragment>
							<AddAvaliationform addAvaliation={addAvaliation} />
						</Fragment>
					)}
				</div>
				
			</div>
		</div>
	)
}

export default AddAvaliation;