import React from 'react';
import './today.css';

const Today = ({ hoje, agora }) => {
     console.log(hoje)
     return (

          <div className="today">
               {/* <h2>Hoje</h2> */}
               {/* <i className="fas fa-cloud-rain"> */}
               {/* <i class="fas fa-cloud"></i> */}
               {/* <i class="fas fa-cloud-sun"></i> */}
               <i class="fas fa-sun">
                    <p>{`${((agora.temperature - 32) * 5 / 9).toFixed(1)}`}</p>

               </i>
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
