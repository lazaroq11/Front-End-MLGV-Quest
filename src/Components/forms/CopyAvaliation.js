import React, { useState} from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import api from '../../services/api'
import {Date} from '../Date'
import '../../App.css';
import { Header } from '../Header/index';






export default function CopyAvaliation(){
	const [allow_anonymous, setAllowAnonymous] = useState(false);
	const [title, setTitle] = useState();
	const[started_at, setStartedAt] = useState();
	const[ended_at, setEndedAt] = useState();
	const[description,setDescription] = useState();
	const history = useHistory();
    const params = useParams();

    
	
	async function PostAvaliation(e){
        e.preventDefault();
	   await api.post(`/copyexam/${params.id}`,{
		  title,
		  description,
		  started_at,
		  ended_at,
		  allow_anonymous, 
		});	   
		
	   history.push(`/ShowAvaliation`);
	}

	


	return (
		<div className="formDiv">
		<form onSubmit={PostAvaliation}>
			<h1>Copiar Avaliação</h1><br/>

            <div className = "inputs11">
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
          </div>
            <div className="inputs11">
				<label>Data Inicial</label>
				<br></br>
			<input type="date" className="check" name = "started_at"
			    value={started_at}
				onChange={e=>setStartedAt(e.target.value)}
				required/>
		</div>
			<br></br>


            <div className="inputs11">
				<label >Data Final</label>
				<br></br>
			<input type="date" className="check" name = "ended_at" 
			    value={ended_at}
				onChange={e=>setEndedAt(e.target.value)}

				required/>
				
		</div>

		<br></br>
                    
					<div className = "inputs13">
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
			      <div className = "inputs12">
				  <button  className="button">Salvar</button>
			<>      </>
			<Link to="/Home"><button  className="button">Cancelar</button></Link>
			</div>
		</form>
      
		</div>
	)}
     

  