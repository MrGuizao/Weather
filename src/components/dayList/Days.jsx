import React from 'react'
import './days.css';

const Days = ({ diario, convert }) => {
     const semana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo', 'Segunda'];
     // (32 °F − 32) × 5/9 = 0 °C

     return (
               <ul>
                    {
                         diario.map((dia, index) => <li className="box-color" key={dia.time}>{semana[index]}: {dia.summary}
                              <div>
                                   <p className="max-temp">Min: {convert(dia.temperatureMin)}</p>
                                   <p className="min-temp">Max: {convert(dia.temperatureMax)}</p>
                              </div>
                         </li>)
                    }
               </ul>
     )
}

export default Days;
