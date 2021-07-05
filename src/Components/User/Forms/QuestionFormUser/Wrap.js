import styled, {css} from 'styled-components';


const Wrap = styled.div`
 
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180vh;
  text-align: center;
  cursor: pointer;

  h1{
    font-style: italic;
    padding: 1.5rem;
    font-size: 0.9rem;
    max-width: 220px;
    width:33%; //alterar o width das avaliações 
    font-weight:bolder;
    color:black;
    font-family: Lexend, sans-serif;
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



  span {
    margin-right: 1.2rem;
  }
`;
export default Wrap;
