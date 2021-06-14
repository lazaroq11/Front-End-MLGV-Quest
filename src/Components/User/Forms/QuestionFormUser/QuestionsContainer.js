import styled from 'styled-components';

export const QuestionsContainer = styled.div `
    max-width: 1800px;
    position: relative;
    margin-top: 12px;
    width: 100%;

    .box-info{
      background-color: black;
      width: 400px !important;
        border-radius: 6px;
        align-items: center;
        padding: 15px;
        justify-content: center;
        position: relative;
        cursor:grabbing;
        display:inline-block;
        transition: all ease 0.4s;
        transform:scale(0.9);
       
        :hover{
          transform:scale(1);
        }
        
        a{
            font-size: 14px;
            text-decoration:none;
            position:absolute;
            color:white;
        }
        
        .btEdit{
          position:absolute;
          right:10px;
          top:3px;
          
        }
        
        .btDelete{
          position:absolute;
          right:10px;
          top:29px;
        }

        p{
            font-size: 14px;
            text-decoration:none;
            position:absolute;
            color:white;
        }
    }

    `;
    export default QuestionsContainer;