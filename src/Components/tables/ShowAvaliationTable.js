import React from 'react'

const ShowAvaliationTable = props => (
  <table>                
    <tbody>
    <h1>Avaliações</h1><br/>
      {props.avaliations.length > 0 ? (
        props.avaliations.map(avaliation => (
          <tr key={avaliation.id} className="row">
            <td><label>Nome: </label>{avaliation.name}</td><br/>
            <td><label>Descrição: </label>{avaliation.descripition}</td><br/>
            <td><label>Permitir Anônimo: </label>{avaliation.an}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td className="row">Não Existe Avaliação Cadastradas</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default ShowAvaliationTable;
