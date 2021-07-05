import styled, {css} from 'styled-components';

const Dropdown = styled.div`
background-color: var(--gray-50);
width: 100%;
height: 240px;
display: flex;
flex-direction: column;
justify-content: left;
align-items: left;
margin-left:2%;
border-bottom: 1px solid #c9c9c9;
border-top: 1px solid #c9c9c9;



.btDelete{
font-size:1.3rem;
     display:flex;
     align-items: center;
     margin-left:10px;
     text-decoration: none;
     color:black;
     transform:scale(0.9);
     transition:all ease 0.4s;
}
 
.btGroup{
  text-decoration:none;
  width:6.8%;
  background-color:black;
  font-weight: 600;
  height: 100px;
  color:white;
  border-radius:8px;
  font-size:15px;
  margin-bottom: 40%;
  border:none;
  outline:none;
  cursor:pointer;
  justify-content: center;
  transform: scale(0.9);
  transition: all ease 0.4s;
  

  }

  .btGroup:hover{
    background-color: #171719;
      cursor:pointer;
      border:none;
      outline-width: 0;
      transform: scale(1)

  }



p{
  font-size: 1rem;
  align-items: center;
  justify-content: center;

}
.btDelete{
font-size:1.3rem;
     display:flex;
     align-items: center;
     margin-left:10px;
     text-decoration: none;
     color:black;
     transform:scale(0.9);
     transition:all ease 0.4s;
}
`;

export default Dropdown;