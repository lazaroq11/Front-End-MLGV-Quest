import React, {useEffect,useState} from 'react';
import Container from "../ShowAvaliationUser/Container"
import AccordionSection from "../ShowAvaliationUser/AccordionSection";
import Wrap from "../ShowAvaliationUser/Wrap";
import Dropdown from "../ShowAvaliationUser/Dropdown";
import api from "../../../../services/api";
import { IconContext } from 'react-icons';
import {Form, Row, Col} from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom';


const QuestionFormUser = () => {
    const [groups, setGroups] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [optionQuestion1, setOptionQuestion1] = useState(false);
    const [optionQuestion2, setOptionQuestion2] = useState(false);
    const [optionQuestion3, setOptionQuestion3] = useState(false);
    const [optionQuestion4, setOptionQuestion4] = useState(false);
    const [optionQuestion5, setOptionQuestion5] = useState(false);
    const params = useParams();
    
   
    

    useEffect(()=>{
        api.get(`/questiongroup/${params.id}`).then(response=>{
        setGroups(response.data);
   
          });

    },[params.id]);
    
    console.group(params.id);
  
         
    return (
      
      <IconContext.Provider value={{ color: '#00FFB9', size: '15px' }}>
          <div className="formDiv">    
          <h1>Questionário</h1>
      </div>
      
      <AccordionSection>
        <Container>
        {groups.map(group =>{
              return (
                <>
                  <Wrap>
                    <h1>{group.title}</h1>
                    </Wrap>
                    
                    <div className = "inputs">
					<label className="anonimo">1</label>
					<input 
					type="radio"
					onChange={(event)=>setOptionQuestion1(event.currentTarget.checked)}	 
					className="check" 
                    value={optionQuestion1}
					checked = {optionQuestion1}				
					/>  

                    </div>
                    <div className = "inputs">
					<label className="anonimo">2 </label>
					<input 
					type="radio"
					onChange={(event)=>setOptionQuestion2(event.currentTarget.checked)}	 
					className="check" 
                    value={optionQuestion2}
					checked = {optionQuestion2}		
					/>  

                    </div> 
                    <div className = "inputs">
					<label className="anonimo">3</label>
					<input 
					type="radio"
					onChange={(event)=>setOptionQuestion3(event.currentTarget.checked)}	 
					className="check" 
                    value={optionQuestion3}
					checked = {optionQuestion3}		
					/>  

                    </div> 
                    <div className = "inputs">
					<label className="anonimo">4</label>
					<input 
					type="radio"
					onChange={(event)=>setOptionQuestion4(event.currentTarget.checked)}	 
					className="check" 
                    value={optionQuestion4}
					checked = {optionQuestion4}		
					/>  

                    </div> 
                    <div className = "inputs">
                    <label classname="anonimo">5</label>    
					<input 
					type="radio"
					onChange={(event)=>setOptionQuestion5(event.currentTarget.checked)}	 
					className="check" 
                    value={optionQuestion5}
					checked = {optionQuestion5}		
					/>  
                    </div>
                                     
                </>
                
                
              );
                  
            })
            
            }



            
            
            
          </Container>
        </AccordionSection>
      </IconContext.Provider>
     
    );
  };
  
export default QuestionFormUser;