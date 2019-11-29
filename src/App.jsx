import React, { Component } from 'react'
import Image from './components/image/Image';
import Days from './components/dayList/Days';
import './index.css';
import Today from './components/Day/Today';

export class App extends Component {
  state = {
    location: '',
    diario: [],
    data: [],
    hoje: [],
    agora: [],
  }

  async componentDidMount() {
    const proxy = `https://cors-anywhere.herokuapp.com/`;
    let lat, long;
    lat = -23.547544;
    long = -46.636874;
    // navigator.geolocation.getCurrentPosition(position => {
    //   lat = position.coords.latitude;
    //   long = position.coords.longitude;
    // });
    // console.log(`${lat} ${long}`);

    await fetch(`${proxy}https://api.darksky.net/forecast/${process.env.REACT_APP_WEATHER_API}/${lat},${long}?lang=pt`)
      .then(response => response.json())
      .then(response => this.setState({ location: response.timezone, diario: response.daily.data, hoje: response.hourly.data, agora: response.currently }))

  }

  convertToCelsius = (temp) => ((temp - 32) * 5 / 9).toFixed(1) + '°C';

  render() {
    return (
      <div className="app">
        <Image />
        <h1>Previsão do tempo em {this.state.location}</h1>

        <div className="division">
          <Today hoje={this.state.hoje} agora={this.state.agora} convert={this.convertToCelsius} />
          <Days diario={this.state.diario} convert={this.convertToCelsius} />
        </div>

      </div>
    )
  }
}

export default App;




