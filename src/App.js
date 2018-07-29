import React, { Component } from 'react';
import './App.css';
import MapComponent from './Map.js';

class App extends Component {

  state = {
    locations:[
      {title: "Vu's Rooftop Restaurant", position: {lat: 44.425543, lng: 26.106787}},
      {title: 'Restaurant Beijing', position: {lat: 44.427528, lng: 26.124222}},
      {title: 'Restaurant Thang Long', position: {lat: 44.421457, lng: 26.107528}},
      {title: 'Sardin', position: {lat: 44.42002, lng: 26.112973}},
      {title: 'Efes Restaurant', position: {lat: 44.420293, lng: 26.116259}},
      {title: 'Trattoria Pane e Vino', position: {lat: 44.419777, lng: 26.115798}},
      {title: 'Thalia Restaurant', position: {lat: 44.416313, lng: 26.106931}},
      {title: 'Restaurant Casa Brânduşa', position: {lat: 44.416288, lng: 26.124088}},
      {title: 'At Călinescu Tavern', position: {lat: 44.410494, lng: 26.112488}},
      {title: 'Bohemia', position: {lat: 44.408599, lng: 26.118087}},
      {title: 'Casa Oprescu', position: {lat: 44.406775, lng: 26.112055}},
      {title: 'Trattoria Rossini', position: {lat: 44.404736, lng: 26.111589}},
      {title: 'Il Cantuccio', position: {lat: 44.416765, lng: 26.093083}}
    ]
  }

  render() {
    return (
      <div className='app'>
        <MapComponent 
          locations={this.state.locations}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing,places&v=3&key=AIzaSyD0STGhDzOr2KtMAf6Qp9cir6yLZuaybbE`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100vh`, width: `100vw` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default App;

  // static defaultProps = {
  //   center: {lat: 44.414325, lng: 26.124863},
  //   zoom: 15
  // }

  // state = {
  //   locations:[
  //     {lat: 44.425543, lng: 26.106787},
  //     {lat: 44.428175, lng: 26.099074},
  //     {lat: 44.427528, lng: 26.124222},
  //     {lat: 44.421457, lng: 26.107528},
  //     {lat: 44.42002, lng: 26.112973},
  //     {lat: 44.420293, lng: 26.116259},
  //     {lat: 44.419777, lng: 26.115798},
  //     {lat: 44.416313, lng: 26.106931},
  //     {lat: 44.416288, lng: 26.124088},
  //     {lat: 44.410494, lng: 26.112488},
  //     {lat: 44.408599, lng: 26.118087},
  //     {lat: 44.406775, lng: 26.112055},
  //     {lat: 44.404736, lng: 26.111589},
  //     {lat: 44.416765, lng: 26.093083}
  //   ]
  // }