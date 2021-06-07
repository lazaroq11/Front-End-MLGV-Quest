import api from '../../services/api'
import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'




export function AddQuestionForm(){ 

	const [title,setTitle] = useState();
	const [category, GetCategory] = useState([]);
	const [group,GetGroup] = useState([]);
	const [selectedGroup, setSelectedGroup] = useState();
	const [selectedAvaliation, setSelectedAvaliation] = useState();
	const [image_url, setImage] = useState(null);
	const [required, setRequired]= useState();
	const [image_alt, setImageAlt] = useState();
    const history = useHistory(); 
	


	async function PostQuestion(e){
        e.preventDefault();
			
		
		
		

	
    await api.post(`/question/${selectedAvaliation}/${selectedGroup}`,{
		
        statement:title,
		question_group_id: selectedGroup,
		exam_id: selectedAvaliation,
		image_url,
		image_alt,
		required,
		
	});

	
	history.push('/Home');
    }
	


	useEffect(()=>{
		api.get(`/exam`).then(response=>{
		  GetCategory(response.data);
		  
		  
		});
		
	  },);



	  useEffect(()=>{
		api.get(`/questiongroup/${selectedAvaliation}`).then(response=>{
		  GetGroup(response.data);
		  
		  
		});
		
	  },[selectedAvaliation]);

	return (
		<div className="formDiv">
		<form onSubmit={PostQuestion}>
			<h1>Cadastrar Perguntas</h1><br/><br/>
			<label>Digite a Pergunta</label><br/>
			<input required type="text" placeholder="Digite a Pergunta" name="name" className="input" 
			value={title} onChange={e=>setTitle(e.target.value)} />
			<br/><br/>
           
			    
			<label>Selecione o Avaliação </label><br/>
			<select className="custom-select" 
			onChange={(e) => {setSelectedAvaliation(e.target.value)}}>
				<option value={0}>Selecione uma avaliação</option>
				{category.map(categoria =>(
				<option key={categoria.key} value={categoria.id}>{categoria.title}</option>
				))}
				</select>		
					
             <br></br>
			 <br></br>

			 	    
			<label>Selecione o Grupo </label><br/>
			<select className="custom-select"  
			onChange={(e) => {setSelectedGroup(e.target.value)}}>
				<option value={0}>Selecione um grupo</option>
				{group.map(grupo =>(
				<option key={grupo.key} value={grupo.id}> {grupo.title} </option>
				))}
				
				</select>
				<br></br>	
              <br></br>
				<div className = "inputs9">
					<label className="anonimo">Resposta Obrigatória? </label>
					<input 
					type="checkbox"
					onChange={(event)=>setRequired(event.currentTarget.checked)}	 
					className="check" 
					value={required}
					checked = {required}	
					/>
					</div>
					
		
			<input name="image_url" type="file"   alt={image_alt} value={image_url} onChange={e=>setImage(e.target.value)}></input>	
			<br></br>

			
			<button className="button">Salvar</button>
			<>      </>
			<Link to="/Home"><button  className="button">Cancelar</button></Link>
			<br/><br/>

		</form>
		</div>
	)
}


