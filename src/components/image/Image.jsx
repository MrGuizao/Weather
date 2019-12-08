import React from 'react';
import './image.css';

function Image({ icone }) {
     switch (icone) {
          case 'clear-day':
          case 'partly-cloudy-day':
               return <img src={require(`../assets/sun.jpg`)} alt="" />;
          case 'clear-night':
          case 'partly-cloudy-night':
               return <img src={require(`../assets/night.jpg`)} alt="" />;
          case 'rain':
          case 'sleet':
               return <img src={require(`../assets/rain.jpg`)} alt="" />;
          case 'fog':
          case 'wind':
          case 'cloudy':
               return <img src={require(`../assets/cloud.jpg`)} alt="" />;
          default:
               return <img src={require(`../assets/thunder.jpg`)} alt="" />;

     }
}

export default Image;

// clear - day, partly - cloudy - day
// clear - night, partly - cloudy - night
// rain, sleet, 
//fog, wind, cloudy
// (Developers should ensure that a sensible default is defined, as additional values, such as hail, thunderstorm, or tornado, 