import React, { useState } from 'react';
import { AvData } from '../AvData';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';


//instalar styled-components pra fazer a estilização
//está trazendo informaçoes do "AvData", trocar por dados do back
//caso queira acrescentar mais dados só colocar dentro do <dropdown>


const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: #fff;
`;

const Container = styled.div`
  position: absolute;
  top: 15%;
`;

const Wrap = styled.div`
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;

  h1{
    padding: 2rem;
    font-size: 2rem;
	color: #fff;
  }

  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #000;
  color: #c9c9c9;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #c9c9c9;
  border-top: 1px solid #c9c9c9;

  p {
    font-size: 1.2rem;
  }

`;

const ShowAvaliation = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked name is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <AccordionSection>
        <Container>
		<h1>Avaliações Cadastradas</h1><br/>
          {AvData.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>Avaliação {index + 1}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>Nome: {item.name}</p>
					<p>Descrição: {item.descripition}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default ShowAvaliation;