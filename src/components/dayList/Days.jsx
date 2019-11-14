import React from 'react'
import './days.css';

const Days = ({ diario }) => {
     const semana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo', 'Segunda'];
     // (32 °F − 32) × 5/9 = 0 °C

     return (
          <ul>
               {
                    diario.map((dia, index) => <li key={dia.time}>{semana[index]}: {dia.summary}
                         <div>
                              <p className="max-temp">Min: {`${((dia.temperatureMin - 32) * 5 / 9).toFixed(1)}`}</p>
                              <p className="min-temp">Max: {`${((dia.temperatureMax - 32) * 5 / 9).toFixed(1)}`}</p>
                         </div>
                    </li>)
               }

               {/* {
                    diario.map((dia, index) => <li key={dia.time}><strong>{semana[index]}</strong>: {dia.summary}</li>)
               } */}
          </ul>
     )
}

export default Days;
