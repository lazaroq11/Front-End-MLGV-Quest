import api from '../../services/api'
import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'




export function AddQuestion(){ 

	const [title,setTitle] = useState();
	const [category, GetCategory] = useState([]);
	const [group,GetGroup] = useState([]);
	const [selectedGroup, setSelectedGroup] = useState();
	const [selectedAvaliation, setSelectedAvaliation] = useState();
	const [image_url, setImage] = useState(null);
	const [required, setRequired]= useState(false);
	const [image_alt, setImageAlt] = useState();
    const history = useHistory(); 
    const params = useParams();
	


	async function PostQuestion(e){
        e.preventDefault();
			
		
	

	
    await api.post(`/question/${params.exam_id}/${params.group_id}`,{
		
        statement:title,
		image_url,
		image_alt,
		required,
		
	});

	
	history.push('/Home');
    }
	
	
	const onChange = (e) =>{
		const file = e.target.files[0];
	};

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
					
		
			<input  name="image_url" type="file" onChange={onChange} alt={image_alt} value={image_url}></input>	
			<br></br>

			
			<button className="button">Salvar</button>
			<>      </>
			<Link to="/Home"><button  className="button">Cancelar</button></Link>
			<br/><br/>

		</form>
		</div>
	)
}


