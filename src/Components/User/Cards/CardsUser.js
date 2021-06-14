import React from 'react';
import './CardsUser.css';
import CardItem from './CardItemUser';

function CardsUser() {
  return (
    <div className='cards'>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
                
              <CardItem 
              src='images/img-copy.jpg'
              alt = "avaliacoesDisponiveis"
              text='Avaliações'
              path='/ShowAvaliationUser/ShowAvaliationUser' />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsUser;
