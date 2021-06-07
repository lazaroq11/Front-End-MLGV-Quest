import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const QuestionTable = props => (
  <table>
    <tbody>
      {props.questions.length > 0 ? (
        props.questions.map(question => (
          <tr key={question.id} className="row">
            <td>{question.name}</td>
            <td>{question.cat}</td>
            <td>
              <button onClick={() => {props.editRow(question)}} className="button">
                      <div className='icons'><TiEdit className='edit-icon'/></div>
              </button>

              <button onClick={() => props.deleteQuestion(question.id)} className="button">
                      <div className='icons'><RiCloseCircleLine className='delete-icon'/></div>
              </button>

            </td>
          </tr>
        ))
      ) : (
        <tr>
          
        </tr>
      )}
    </tbody>
  </table>
)

export default QuestionTable;
