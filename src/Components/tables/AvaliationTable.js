import React from 'react'


const AvaliationTable = props => (
  
  <table>                
    <tbody>
      <tr className="row2">
      <td><label>Nome </label></td>
      <td><label>Descricao </label></td>
      <td><label>Período </label></td>
      </tr>
      
      {props.avaliations.length > 0 ? (
        props.avaliations.map(avaliation => (
          <tr key={avaliation.id} className="row">
          <td><label>De: </label>{avaliation.dstart} até {avaliation.dend}</td><br/>
            <td><label>Nome: </label>{avaliation.name}</td><br/>
            <td><label>Descrição: </label>{avaliation.descripition}</td><br/>
            <td><label>Permitir Anônimo: </label>{avaliation.an}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td className="row">Não Há Avaliações Cadastradas</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default AvaliationTable;
