import React, { useState,useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import api from '../../services/api'
import '../../App.css';




export function AddGroup(){
	const [classs, setClasss] = useState();
	const [category, setCategory] = useState([]);
	const [title, setTitle] = useState();
    const history = useHistory();
	const params = useParams();
	const [selectedCategory, setSelectedCategory] = useState();
 	
	async function PostGroup(e){
		e.preventDefault();
        
		console.log(selectedCategory)
	const response = await api.post(`/questiongroup/${params.id}`,{
		  title,
		  classs, 
		 
		});	 
		const {id} = response.data;
        
		history.push(`/QuestionFluxo/${params.id}/${id}`);
	}
    
   

	
	   	
	
	return (
	   
		<div className="formDiv2">
		<form onSubmit={PostGroup}>
			<h1>Cadastrar Grupos</h1>
			
			<label>Informe o nome do grupo</label><br/>
			<input required type="text" placeholder="Digite o nome do grupo" name="name" className="input" value={title} 
			onChange={e=>setTitle(e.target.value)} />
		
			
					<br/><br/>
					<div className = "inputs8">
					<label className="anonimo">Atrelado a disciplina </label>
					<input 
					type="checkbox"
					onChange={(event)=>setClasss(event.currentTarget.checked)}	 
					className="check" 
					value={classs}
					checked = {classs}	
					/>
					
					</div>              
			<br/><br/><button className="button">Salvar</button>
			<span value={classs} />
			<>      </>
			<Link to="/Home"><button  className="button">Cancelar</button></Link>
		
			<br/><br/>
		
		
		
	
		</form>	
	
		</div>
	
		
	);


}
