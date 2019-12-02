import React from 'react';
import './image.css';
import Cloud from '../assets/cloud.jpg';
import Rain from '../assets/rain.jpg';
import Rainy from '../assets/rainy.jpg';
import Sun from '../assets/sun.jpg';
import Thunder from '../assets/thunder.jpg';

Image = ({ icone }) => (
     <img src={Thunder} alt="" />

)

export default Image;


// clear - day, clear - night, rain, snow, sleet, wind, fog, cloudy, partly - cloudy - day, or partly - cloudy - night. 
// (Developers should ensure that a sensible default is defined, as additional values, such as hail, thunderstorm, or tornado, 