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
    icon: '',
    loading: false
  }

  async componentDidMount() {
    const proxy = `https://cors-anywhere.herokuapp.com/`;
    let lat = -23.547544, long = -46.636874;
    // navigator.geolocation.getCurrentPosition(position => {
    //   lat = position.coords.latitude;
    //   long = position.coords.longitude;
    // });
    // console.log(`${lat}, ${long}`);

    this.setState({ loading: true }); //carregando
    await fetch(`${proxy}https://api.darksky.net/forecast/${process.env.REACT_APP_WEATHER_API}/${lat},${long}?lang=pt`)
    .then(response => response.json())
    .then(response => this.setState({ icon: response.currently.icon, location: response.timezone, diario: response.daily.data, hoje: response.hourly.data, agora: response.currently }))
    
    this.setState({ loading: false }); //carregando
  }

  //converte para celsius
  convertToCelsius = (temp) => ((temp - 32) * 5 / 9).toFixed(1) + '°C';

  render() {
    if (this.state.loading) {
      return (
        <div className="app">
          <Image icone={this.state.icon} />
          <h1>Carregando...</h1>
        </div>
      )
    } else {
      return (
        <div className="app">
          <Image icone={this.state.icon} />
          <h1>{this.state.location}</h1>

          <div className="division">
            <Today hoje={this.state.hoje} agora={this.state.agora} convert={this.convertToCelsius} />
            <Days diario={this.state.diario} convert={this.convertToCelsius} />
          </div>

        </div>
        
      )
    }
  }
}

export default App;
