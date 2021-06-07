import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import Questions from './Components/pages/Questions';
import QuestionFluxo from './Components/pages/QuestionFluxo';
import Group from './Components/pages/Group';
import GroupFluxo from './Components/pages/GroupFluxo';
import Avaliation from './Components/pages/Avaliation';
import Answers from './Components/pages/Answers';

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














export default function Routes(){
    
   
    return (
      <>
      
      
        <Router>
        <Switch>
        <Route path='/' exact component={Login}/>
        { 
        <>
    
      <Header/>  
      
    
          <Route path='/Home' component={Home}/>
          <Route path='/avaliation'  component={Avaliation} />
          <Route path='/group' component={Group} />
          <Route path='/groupfluxo/:id' component={GroupFluxo} />
            <Route path='/questionfluxo/:exam_id/:group_id' component={QuestionFluxo} />
          <Route path='/questions' component={Questions} />
          <Route path='/answers' component={Answers} />
          <Route path='/AvaliacoesCadastradas' component={AvaliacoesCadastradas} />
          <Route path='/Showavaliation' component={ShowAvaliation} />
          <Route path='/DropzoneGroups/:id' component={DropzoneGroups}/>
          <Route path='/EditAvaliationForm/:id' component={EditAvaliationForm}/>
          <Route path='/EditQuestionForm/:exam_id/:group_id/:id' component={EditQuestionForm}/>
          <Route path='/DropzoneQuestions/:exam_id/:id' component={DropzoneQuestions}/>
          <Route path='/EditGroupForm/:exam_id/:id' component={EditGroupForm}/>
          <Route path='/CopyAvaliation/:id' component={CopyAvaliation}/>
          <Route path='/AddGroupForm/:exam_id' component={AddGroupForm}/>
          <Route path='/AddGroup/:exam_id/id' component={AddGroupForm}/>
          <Route path='/AddQuestionForm/:exam_id/:question_group_id' component={AddQuestionForm}/>
         
         
        </>
        }
          </Switch>   
        </Router>
        </>
    );
   
}
 
