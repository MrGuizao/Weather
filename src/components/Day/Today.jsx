import React from 'react';
import './today.css';

const Today = ({ hoje, agora, convert }) => {
     console.log(hoje);
     return (
          <div className="today box-color">
               <i class="fas fa-sun"></i>
               <h3>{convert(agora.temperature)}</h3>
               {/* <h2>Hoje</h2> */}
               {/* <i className="fas fa-cloud-rain"> */}
               {/* <i class="fas fa-cloud"></i> */}
               {/* <i class="fas fa-cloud-sun"></i> */}
               {/* temperatura Min max*/}
               {/* Ventos */}
               {/* horas 9, 12, 15, 18, 21, 24*/}
               {/* </i> */}
               {/* <p>{agora.summary}</p> */}
               {/* <p></p>
               <p></p>
               <p></p> */}

          </div>
     )
}

export default Today;
