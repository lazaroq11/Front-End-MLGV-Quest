import React, { useState,useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import api from '../../services/api'
import { AvData } from '../AvData';
import '../../App.css';




export function EditQuestionForm(){
	const[question, setQuestion] = useState();
	const[image_url, setImage] = useState(null);
	const[group, setGroup] = useState();
	const [classs, setClasss] = useState();
	const [category, setCategory] = useState([]);
	const [required, setRequired] = useState(false);
	const [title, setTitle] = useState();
    const history = useHistory();
	const params = useParams();
	const [image_alt, setImageAlt] = useState();
	const [selectedCategory, setSelectedCategory] = useState();
 	
	async function PutQuestion(e){
		e.preventDefault();
        
		console.log(title);
		console.log(required);
		console.log(image_url);
	   await api.put(`/question/${params.id}`,{
		statement:title,
		image_url,
		required,
		});	 	
        
		history.push(`/DropzoneQuestions/${params.exam_id}/${params.group_id}`);
		
	}
	 
    

	
	   	
	
	return (
	   
		<div className="formDivEditGroup">
		<form onSubmit={PutQuestion}>
			<h1>Editar Perguntas</h1>
			<label>Digite a pergunta</label><br/>
			<input required type="text" placeholder="Digite a pergunta" name="name" className="input" 
			value={title} 
			onChange={e=>setTitle(e.target.value)}/>	
			<br/><br/>
			<div className = "inputs">
					<label className="anonimo">Resposta Obrigatória? </label>
					<input 
					type="checkbox"
					onChange={(event)=>setRequired(event.currentTarget.checked)}	 
					className="check" 
					value={required}
					checked = {required}	
					/>
					</div>

            
			<input name="image_url" 
			type="file" value={image_url} 
			alt={image_alt}
			onChange={e=>setImage(e.target.value)}></input>	 
			<br/><br/><button className="button">Salvar</button>
			<>      </>
			<Link to="/Home"><button className="button">Cancelar</button></Link>
		     
			<br/><br/>
		
		
		
	
		</form>	
	
		</div>
	
		
	);


}
