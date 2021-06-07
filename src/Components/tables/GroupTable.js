import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const GroupTable = props => (
  <table>
    <tbody>
    
      {props.groups.length > 0 ? (

        props.groups.map(group => (
          <tr key={group.id} className="row">
            <td>Nome: {group.name}</td>
            <td>Descrição: {group.descripition}</td> 
            <td>Atrelado a disciplinas: {group.at}</td>
            <td>
              <button onClick={() => {props.editRow(group)}} className="button">
                      <div className='icons'><TiEdit className='edit-icon'/></div>
              </button>

              <button onClick={() => props.deleteGroup(group.id)} className="button">
                      <div className='icons'><RiCloseCircleLine className='delete-icon'/></div>
              </button></td>
          </tr>
        ))
      ) : (
        <tr>
          
        </tr>
      )}
    </tbody>
  </table>
)

export default GroupTable;