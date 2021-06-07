import React, {useEffect,useState} from 'react';
import {Responsive , WidthProvider }  from 'react-grid-layout';
import {Link, useParams} from 'react-router-dom';
import styled from 'styled-components';
import { MdDelete } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import EditAvaliationForm from '../forms/EditAvaliationForm';
import {AiOutlinePlus} from "react-icons/ai";
import api from '../../services/api';




export const GroupsContainer = styled.div `
    max-width: 1800px;
    position: relative;
    margin-top: 12px;
    width: 100%;

    .box-info{
      background-color: black;
      width: 280px !important;
        border-radius: 6px;
        align-items: center;
        padding: 15px;
        justify-content: center;
        cursor:grabbing;
        display:inline-block;
        transition: all ease 0.4s;
        transform:scale(0.9);
        display:flex;
        margin-bottom:100%;
       
        :hover{
          transform:scale(1);
        }
        

        

        a{
            font-size: 14px;
            text-decoration:none;
            position:absolute;
            color:white;
        }

        .btEdit{
          position:absolute;
          right:10px;
          top:3px;
          
        }
        
        .btDelete{
          position:absolute;
          right:10px;
          top:29px;
        }

        
    }

    
      
    `;
    

   


const DropzoneGroups = () => {
  const params = useParams();
  const [groups, setGroups] = useState([]);

  useEffect(()=>{
    api.get(`/questiongroup/${params.id}`).then(response=>{
      setGroups(response.data);
      console.log(response.data)
      
      
    });
  },[params.id]);
 
  async function handleAddGroups() {
    const response = await api.post('/questiongroup',{
      "title": `Novo grupo ${Date.now()}`,
	    
    });
    
    
   
  }

  async function handleRemoveGroup(id) {
    const deleteResponse = await api.delete(`/questiongroup/${id}`);
    if (deleteResponse.status === 204){
      setGroups(groups.filter(group => group.id !== id));
    }
  }
   
  
        
  
    // layout is an array of objects, see the demo for more complete usage
    const ResponsiveGridLayout = WidthProvider(Responsive);
    
    return (
       
      <>
      <div className="btAvaliation">
      <Link to="/group" className="btPlus">Cadastrar Grupo<AiOutlinePlus/></Link> 
      </div>
      <div className="formDiv">
        
      <h1>Grupo de Questões</h1>
      </div>
      <GroupsContainer> 
    <ResponsiveGridLayout
    className="layout" 
    breakpoints={{lg: 10, md: 10, sm: 10, xs: 10, xxs: 10}}
    cols={{lg: 1, md: 1, sm: 1, xs: 1, xxs: 1}} 
    rowHeight={60} 
    width={5} 
    margin= {[70, 25]}
    >
      

    {groups.map(group=>{
         return(
        <div className="box-info" key={group.id} data-grid={{x: 0, y: 0, w: 1, h: 1}}>
          <Link to={`/DropzoneQuestions/${params.id}/${group.id}`} className="btGroup">{group.title}</Link> 
          <Link to={`/EditGroupForm/${params.id}/${group.id}`} title="Editar" className="btEdit"><BiEditAlt/></Link>
          <Link to="/ShowAvaliation"  className="btDelete" title="Deletar" onClick={()=>handleRemoveGroup(group.id)}><MdDelete/></Link>   
        </div>
        );
        })}
    </ResponsiveGridLayout>
    </GroupsContainer>
    
      </>
       
      
       
    );
  }
  


export default DropzoneGroups;