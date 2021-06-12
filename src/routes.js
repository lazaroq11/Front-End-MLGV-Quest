import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {isAuthenticated} from "./auth";



import Home from './Components/pages/Home';
import Questions from './Components/pages/Questions';
import QuestionFluxo from './Components/pages/QuestionFluxo';
import Group from './Components/pages/Group';
import GroupFluxo from './Components/pages/GroupFluxo';
import Avaliation from './Components/pages/Avaliation';
import Answers from './Components/pages/Answers';
import HomeUser from './Components/User/HomeUser/HomeUser';
import ShowAvaliation from './Components/pages/ShowAvaliation';
import Login from './Components/Login';
import { AddAvaliationform } from './Components/forms/AddAvaliationForm';
import {AddQuestionForm} from './Components/forms/AddQuestionForm';
import AvaliacoesCadastradas from './Components/pages/AvaliacoesCadastradas';
import DropzoneGroups from './Components/pages/DropzoneGroups';
import DropzoneQuestions from './Components/pages/DropzoneQuestions';
import { Header } from './Components/Header';
import {EditAvaliationForm} from './Components/forms/EditAvaliationForm';
import {EditQuestionForm} from './Components/forms/EditQuestionForm';
import {EditGroupForm} from './Components/forms/EditGroupForm';
import CopyAvaliation from './Components/forms/CopyAvaliation';
import {AddGroupForm} from './Components/forms/AddGroupForm';
import {AddGroup} from './Components/forms/AddGroup';
import {AddQuestion} from './Components/forms/AddQuestion';
import ShowAvaliationUser from './Components/User/Forms/ShowAvaliationUser/ShowAvaliationUser';
import QuestionFormUser from './Components/User/Forms/QuestionFormUser/QuestionFormUser';
import Modal from './Components/User/Forms/Modal/Modal';








//Verifica se é usuario ou gestor 

const PrivateRoute = ({component : Component, ...rest}) => (
  <Route  
  {...rest}
  render={props=>
  isAuthenticated() ? (
    <Component {...props} />

  ) : (

    <Redirect to = {{pathname:"/", state: {from: props.location} }} />
  ) 
  
  }  
/>

);







export default function Routes(){
    
   
    return (
      <>
      
      
        <Router>
        <Switch>
        <Route path='/' exact component={Login}/>
        { 
        <>
    
      <Header/>  
      
         <PrivateRoute path='/HomeUser' component={HomeUser}/>  
          <PrivateRoute path='/Home' component={Home}/>
          <PrivateRoute path='/avaliation'  component={Avaliation} />
          <PrivateRoute path='/group' component={Group} />
          <PrivateRoute path='/groupfluxo/:id' component={GroupFluxo} />
          <PrivateRoute path='/questionfluxo/:exam_id/:group_id' component={QuestionFluxo} />
          <PrivateRoute path='/questions' component={Questions} />
          <PrivateRoute path='/answers' component={Answers} />
          <PrivateRoute path='/AvaliacoesCadastradas' component={AvaliacoesCadastradas} />
          <PrivateRoute path='/Showavaliation' component={ShowAvaliation} />
          <PrivateRoute path='/DropzoneGroups/:id' component={DropzoneGroups}/>
          <PrivateRoute path='/EditAvaliationForm/:id' component={EditAvaliationForm}/>
          <PrivateRoute path='/EditQuestionForm/:exam_id/:group_id/:id' component={EditQuestionForm}/>
          <PrivateRoute path='/DropzoneQuestions/:exam_id/:id' component={DropzoneQuestions}/>
          <PrivateRoute path='/EditGroupForm/:exam_id/:id' component={EditGroupForm}/>
          <PrivateRoute path='/CopyAvaliation/:id' component={CopyAvaliation}/>
          <PrivateRoute path='/AddGroupForm/:exam_id' component={AddGroupForm}/>
          <PrivateRoute path='/AddGroup/:exam_id/id' component={AddGroupForm}/>
          <PrivateRoute path='/AddQuestionForm/:exam_id/:question_group_id' component={AddQuestionForm}/>
          <PrivateRoute path = '/ShowAvaliationUser' component = {ShowAvaliationUser}/>
          <PrivateRoute path = '/QuestionFormUser' component = {QuestionFormUser}/>
          <PrivateRoute path = '/Modal' component={Modal}/>
          
          
         
        </>
        }
          </Switch>   
        </Router>
        </>
    );
   
}
 
