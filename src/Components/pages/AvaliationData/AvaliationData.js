import React from 'react';
import '../AvaliationData/index.css'
import {Bar,Pie, Line} from 'react-chartjs-2';

const state = {
    labels: ['1', '2', '3',
             '4', '5'],
    datasets: [
      {
        label: '% Opções',
        backgroundColor: 'black',
        borderColor: 'rgba(0,0,0,1)',
        width:'1%',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }
  
  const state2 = {
    labels: ['1', '2', '3',
             '4', '5'],
    datasets: [
      {
          
        label: 'Rainfall',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4'
        ],
        hoverBackgroundColor: [
        'black',
        'black',
        'black',
        'black',
        'black'
        ],
        data: [65, 59, 80, 81, 56]
      }
    ]
  }



const AvaliationData = () => {
    return (
    <div className = "container-avData">
    <div className = "formDiv">
    <h1>Dados</h1>
    </div>
    <div className = "charts">
    <p>Gráficos:</p>
    </div>

    <div className="chart-container">
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:10
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
      
    <div className="chart-container-pie">
        <Pie
          data={state2}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:10
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
</div>
    

  



<div className = "linkPlanilha">
   <button className = "planilha">Exportar Planilha</button>
</div>
  
    </div>
    );
}

export default AvaliationData;