import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
// import Calendar from './components/Calendar/Calendar';
import Footer from './components/Footer/Footer';
// import Details from './components/Details/Details';
import FetchData from './service/FetchData';

export default class App extends Component {

  fetchData = new FetchData();

  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rockets: [],
  };

  componentDidMount() {
    this.updateRocket();
  }

  updateRocket() {
    this.fetchData.getRocket()
      .then(data => {
        this.setState( { rockets: data.map(item => item.name) } )
        return data;
      })
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(rocketFeatures => this.setState({ rocketFeatures }, () => console.log(this.state))) // вторым параметром в setState - callback-функция
  }

  changeRocket = (rocket) => {
    this.setState({
      rocket
    }, this.updateRocket)
  }

  render() {
    return (
      <>
      <Header rockets={this.state.rockets} changeRocket={this.changeRocket} />
      <Main rocket={this.state.rocket} />
      <Features rocketFeatures={this.state.rocketFeatures} />
      {/* <Calendar />
      <Details /> */}
      <Footer />
    </>
    )
  }
}
