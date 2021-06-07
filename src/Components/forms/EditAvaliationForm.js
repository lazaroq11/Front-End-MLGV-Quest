import React, { useState, useEffect } from 'react'
import { Link, useHistory,useParams} from 'react-router-dom'
import api from '../../services/api'
import '../../App.css';



export function EditAvaliationForm(){
  const[avaliation, setAvaliation] = useState();
	const [title, setTitle] = useState();
	const[started_at, setStartedAt] = useState();
  const[ended_at, setEndedAt] = useState();
	const[description,setDescription] = useState();
  const[allow_anonymous, setAllowAnonymous] = useState(false);
	const history = useHistory();
  const params = useParams();
  
  async function PutAvaliation(e){
		e.preventDefault();
      console.log(allow_anonymous)
      console.log(title)
      console.log(started_at)
      console.log(ended_at)
      console.log(description)
	   await api.put(`/exam/${params.id}`,{
		  title,
		  description,
		  started_at,
		  ended_at,
		  allow_anonymous, 
		});	   
		
	   history.push(`/ShowAvaliation`);
	}
     console.log(params.id);

     
	  useEffect(()=>{
      api.get(`/exam/${params.id}`).then(response=>{
        setAvaliation(response.data);
        
        
      });
      
      },[params.id]);
  
  return (
	<div className="formDivEditGroup">
    <form onSubmit={PutAvaliation}  className="rowedit">
       <h1>Editar Avaliação</h1>
       <label>Informe o nome da Avaliação</label><br/>
      <input required type="text" name="title" className="input" 
       value={title} onChange={e=>setTitle(e.target.value)} />
      <br/><br/>
      <label>Informe uma descrição</label><br/>
      <input required type="text"  name="description" className="input" 
      value={description} onChange={e=>setDescription(e.target.value)} required />
      <br/><br/> 
       

      <div className="inputs3">
				<label>Data Inicial</label>
				<br></br>
			<input type="date" className="check" name = "started_at"
      onChange={e=>setStartedAt(e.target.value)}
			value={started_at}
          
				required/>
		</div>
			<br></br>


            <div className="inputs3">
				<label >Data Final</label>
				<br></br>
			<input type="date" className="check" name = "ended_at" 
			    value={ended_at}
				onChange={e=>setEndedAt(e.target.value)}

				required/>
				
		</div>

    <br></br>
      
			<div className = "inputs4">
			<label className="anonimo">Anônimo </label>
			   <input 
					type="checkbox"
					onChange={(event)=>setAllowAnonymous(event.currentTarget.checked)}	 
					className="check" 
					value={allow_anonymous}
					checked = {allow_anonymous}	
					/>
				    
					</div>
          <br></br>


      <button  className="button">Atualizar</button>
      <> </>
      <button  className="button">Cancelar</button>
    </form>
    </div>
  )
}

export default EditAvaliationForm;
