
import styled, {css} from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 2%;
  font-weight: bolder;

  .btDelete{
  display: inline-block;
  align-items: left;
  font-size: 24px;
  cursor: pointer;
  height:40px;
  width:40px;
  color:black;
  text-decoration:none;
 
  }

  .btEdit{
    display: inline-block;
  align-items: left;
  font-size: 24px;
  cursor: pointer;
  text-decoration:none; 
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
export default Container;