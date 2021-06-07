import React, { useState,useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import api from '../../services/api'
import { AvData } from '../AvData';
import '../../App.css';




export function EditGroupForm(){
	const[group, setGroup] = useState();
	const [classs, setClasss] = useState(false);
	const [category, setCategory] = useState([]);
	const [title, setTitle] = useState();
    const history = useHistory();
	const params = useParams();
	const [selectedCategory, setSelectedCategory] = useState();
 	
	async function PutGroup(e){
		e.preventDefault();
        
		console.log(title)
		console.log(classs)
	   await api.put(`/questiongroup/${params.id}`,{
		  title,
		  classs, 
		});	 	
        
		history.push(`/DropzoneGroups/${params.exam_id}`);
	}
	  console.log(params.id)
    

	useEffect(()=>{
		api.get(`/questiongroup/${params.id}`).then(response=>{
		  setGroup(response.data);	  
		});
		
		},[params.id]);
	
	   	
	
	return (
	   
		<div className="formDivEditGroup">
		<form onSubmit={PutGroup}>
			<h1>Editar Grupos</h1>
			
			<label>Informe o nome do grupo</label><br/>
			<input required type="text" placeholder="Digite o nome do grupo" name="name" className="input" 
			value={title} 
			onChange={e=>setTitle(e.target.value)}/>
		
			
			
					<br/><br/>
					<div className = "inputs">
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
			<>      </>
			<Link to="/Home"><button className="button">Cancelar</button></Link>
		
			<br/><br/>
		
		
		
	
		</form>	
	
		</div>
	
		
	);


}
