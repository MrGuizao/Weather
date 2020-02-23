import './index.css';
import React, { Component } from 'react'
import Image from './components/image/Image';
import Days from './components/dayList/Days';
import Today from './components/Day/Today';

export class App extends Component {
  state = {
    lat: '',
    long: '',
    location: '',
    diario: [],
    data: [],
    hoje: [],
    agora: [],
    icon: '',
    loading: false
  }

  componentDidMount() {
    const proxy = `https://cors-anywhere.herokuapp.com/`;
    this.setState({ loading: true }); //carregando
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(async (position) => {
        this.setState({ long: position.coords.longitude });
        this.setState({ lat: position.coords.latitude });
        await fetch(`${proxy}https://api.darksky.net/forecast/${process.env.REACT_APP_WEATHER_API}/${this.state.lat},${this.state.long}?lang=pt`)
          .then(response => response.json())
          .then(response => this.setState({ icon: response.currently.icon, location: response.timezone, diario: response.daily.data, hoje: response.hourly.data, agora: response.currently }))
        this.setState({ loading: false }); //carregando
        console.log(this.state.lat, this.state.long)
      });
    }
  }

  //converte para celsius
  convertToCelsius = temp => ((temp - 32) * 5 / 9).toFixed(1) + '°C';
  convertHumidity = humidity => humidity * 100;

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
            <Today agora={this.state.agora} convert={this.convertToCelsius} humidity={this.convertHumidity} />
            <Days diario={this.state.diario} convert={this.convertToCelsius} />
          </div>
        </div>
      )
    }
  }
}

export default App;
