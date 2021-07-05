import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem 
              src='images/img-form.jpg'
              alt="form"
              text='Cadastrar Avaliação'
              path='/avaliation' />

            <CardItem
              src='images/img-group.jpg'
              alt="group"
              text='Cadastrar Grupos'
              path='/group'/>

            <CardItem
              src='images/img-questions.jpg'
              alt = "questions"
              text='Cadastrar Perguntas'
              path='/questions'/>

        
              
              <CardItem 
              src='images/img-copy.jpg'
              alt = "copyAvaliation"
              text='Avaliações cadastradas'
              path='/ShowAvaliation' />
              
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
