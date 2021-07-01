import React from 'react'
import { Router, Switch, Route, useHistory } from 'react-router-dom';
import Login from '../Components/Login';

import Home from '../Components/pages/Home';
import Questions from '../Components/pages/Questions';
import QuestionFluxo from '../Components/pages/QuestionFluxo';
import Group from '../Components/pages/Group';
import GroupFluxo from '../Components/pages/GroupFluxo';
import Avaliation from '../Components/pages/Avaliation';
import Answers from '../Components/pages/Answers';
import ShowAvaliation from '../Components/pages/ShowAvaliation';
import AvaliationData from '../Components/pages/AvaliationData/AvaliationData'


import {AddQuestionForm} from '../Components/forms/AddQuestionForm';
import AvaliacoesCadastradas from '../Components/pages/AvaliacoesCadastradas';
import DropzoneGroups from '../Components/pages/DropzoneGroups';
import DropzoneQuestions from '../Components/pages/DropzoneQuestions';
import { Header } from '../Components/Header';
import {EditAvaliationForm} from '../Components/forms/EditAvaliationForm';
import {EditQuestionForm} from '../Components/forms/EditQuestionForm';
import {EditGroupForm} from '../Components/forms/EditGroupForm';
import CopyAvaliation from '../Components/forms/CopyAvaliation';
import {AddGroupForm} from '../Components/forms/AddGroupForm';



import PrivateRoutes from './PrivateRoutes';


import HomeUser from '../Components/User/HomeUser/HomeUser';
import ShowAvaliationUser from '../Components/User/Forms/ShowAvaliationUser/ShowAvaliationUser';
import QuestionFormUser from '../Components/User/Forms/QuestionFormUser/QuestionFormUser';
import Modal from '../Components/User/Forms/Modal/Modal'
import Terms from '../Components/User/Terms/Terms';



export default function AuthRoutes(){

    const history = useHistory();

    return (
 
        <Router history = {history}>
        <Switch>
            
        <Route path='/' exact component={Login}/> 
        {
            <>
         <Header/>
           
          <PrivateRoutes exact path='/Home'  component={Home} type="manager"/>
          <PrivateRoutes path='/avaliation'  component={Avaliation} />
          <PrivateRoutes path='/group' component={Group} />
          <PrivateRoutes path='/groupfluxo/:id' component={GroupFluxo} />
          <PrivateRoutes path='/questionfluxo/:exam_id/:group_id' component={QuestionFluxo} />
          <PrivateRoutes path='/questions' component={Questions} />
          <PrivateRoutes path='/answers' component={Answers} />
          <PrivateRoutes path='/AvaliacoesCadastradas' component={AvaliacoesCadastradas} />
          <PrivateRoutes path='/Showavaliation' component={ShowAvaliation} />
          <PrivateRoutes path = '/AvaliationData' component = {AvaliationData}/>
          <PrivateRoutes path='/DropzoneGroups/:id' component={DropzoneGroups}/>
          <PrivateRoutes path='/EditAvaliationForm/:id' component={EditAvaliationForm}/>
          <PrivateRoutes path='/EditQuestionForm/:exam_id/:group_id/:id' component={EditQuestionForm}/>
          <PrivateRoutes path='/DropzoneQuestions/:exam_id/:id' component={DropzoneQuestions}/>
          <PrivateRoutes path='/EditGroupForm/:exam_id/:id' component={EditGroupForm}/>
          <PrivateRoutes path='/CopyAvaliation/:id' component={CopyAvaliation}/>
          <PrivateRoutes path='/AddGroupForm/:exam_id' component={AddGroupForm}/>
          <PrivateRoutes path='/AddGroup/:exam_id/id' component={AddGroupForm}/>
          <PrivateRoutes path='/AddQuestionForm/:exam_id/:question_group_id' component={AddQuestionForm}/> 
          <PrivateRoutes exact path='/HomeUser' component={HomeUser}/>  
          <PrivateRoutes path = '/ShowAvaliationUser' component = {ShowAvaliationUser}/>
          <PrivateRoutes path = '/Modal' component={Modal}/>
          <PrivateRoutes path = '/QuestionFormUser/:id' component = {QuestionFormUser}/>
          <PrivateRoutes path = '/Terms/:exam_id' component = {Terms}/>
          </>
          }
</Switch>
    </Router>
       
    );

        }