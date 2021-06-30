import React, { useState} from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import api from '../../services/api'
import '../../App.css';






export function AddAvaliationform(){
	const [allow_anonymous, setAllowAnonymous] = useState(false);
	const [title, setTitle] = useState();
	const[started_at, setStartedAt] = useState();
	const[ended_at, setEndedAt] = useState();
	const[description,setDescription] = useState();
	const [avaliation, setAvaliation] = useState();
	const history = useHistory();
	 const params = useParams();
	 var date = new Date().getDate();
	 var month = new Date().getMonth() + 1;
	 var year = new Date().getFullYear();
	

	 
	 
      

    
	
	async function PostAvaliation(e){
		e.preventDefault();
      console.log(allow_anonymous)
	   
	try{  
	const response =  await api.post('/exam',{
		  title,
		  description,
		  started_at,
		  ended_at,
		  allow_anonymous,
   
	 
		});
		 const {id} = response.data;
		console.log(response.data);
	  	history.push(`/GroupFluxo/${id}`);		

	}catch(error){
		const message = error.response.status
		if(message === 400){
		alert("Nome de avaliação existente");
		}

	}
	
	}

	
     


	return (
		<div className="formDiv">
		<form onSubmit={PostAvaliation}>
			<h1>Cadastrar Avaliação</h1><br/>


			<label>Informe o nome da Avaliação</label><br/>
			<input type="text" placeholder="Digite o nome da avaliação" name="title" className="input" 
			value={title} 
			onChange={e=>setTitle(e.target.value)}
			required />
			<br/><br/>
			<label>Informe uma descrição</label><br/>
			<input type="text" placeholder="Digite a descricão da avaliação" name="descripition" className="input" 
			value={description} 
			onChange={e=>setDescription(e.target.value)}
			required />
			<br/><br/>

            <div className="inputs5">
				<label>Data Inicial</label>
				<br></br>
			<input type="date" min = {date + '/' + month + '/' + year} className="check" name = "started_at"
			    value={started_at}
				onChange={e=>setStartedAt(e.target.value)}
				required/>
		</div>
			<br></br>


            <div className="inputs5">
				<label>Data Final</label>
				<br></br>
			<input type="date" className="check" name = "ended_at" 
			    value={ended_at}
				onChange={e=>setEndedAt(e.target.value)}
				required/>
				
		</div>

		<br></br>
                    
					<div className = "inputs5">
					<label className="anonimo">Anônimo </label>
					<input 
					type="checkbox"
					onChange={(event)=>setAllowAnonymous(event.currentTarget.checked)}	 
					className="check" 
					value={allow_anonymous}
					checked = {allow_anonymous}	
					/>
				    
					</div>
					
			      <br/><br/>
			
				  <button  className="button">Salvar</button>
			<>      </>
			<Link to="/Home"><button  className="button">Cancelar</button></Link>
			
		</form>

		</div>
	)}
