import React from 'react';
import './today.css';

const Today = ({ agora, convert, humidity }) => {
     console.log(agora);
     const data = new Date();
     return (
          <div className="today box-color">
               <div className="animate-icon">
                    <i className="fas fa-cloud"></i>
                    <h3>{convert(agora.temperature)}</h3>
               </div>
               <div className="info-now">
                    <p>Horário: {`${data.getHours()}:${data.getMinutes()}`}</p>
                    <p>Resumo do tempo: {agora.summary}</p>
                    <p>Velocidade do vento: {agora.windSpeed} km/h</p>
                    <p>Umidade: {humidity(agora.humidity)}%</p>
                    <p>Visibilidade: {agora.visibility} km</p>
                    <p>Barômetro: {agora.pressure} mb</p>
                    <p>Precipitação: {agora.precipProbability}%</p>

               </div>

          </div>
     )
}

export default Today;
