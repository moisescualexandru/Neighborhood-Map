import React, { Component } from 'react';
import './App.css';
import MapComponent from './Map.js';
import FloatingPanel from './FloatingPanel.js';
import SearchBox from './SearchBox.js';

class App extends Component {

  state = {
    locations:[
      {id: 'ChIJj6GtdBf_sUARWEHbbzJbkWg', title: "Vu's Rooftop Restaurant", position: {lat: 44.425543, lng: 26.106787}, address: 'Splaiul Unirii, nr. 6, bloc B3A, etaj 8, București', isOpen: false},
      {id: 'ChIJN2wU7CD_sUARxTw8ewsbZ14', title: 'Restaurant Beijing', position: {lat: 44.427528, lng: 26.124222}, address: 'Str. Verdetei, 11, București', isOpen: false},
      {id: 'ChIJNZ-_MBr_sUARuJa9gHg45T4', title: 'Restaurant Thang Long', position: {lat: 44.421457, lng: 26.107528}, address: 'Strada Bucur 11, București', isOpen: false},
      {id: 'ChIJ4aRaDRz_sUAR1TfF1iw5Ifo', title: 'Sardin', position: {lat: 44.42002, lng: 26.112973}, address: 'Bulevardul Mircea Vodă 39H, București', isOpen: false},
      {id: 'ChIJ4xwzzx3_sUARINSwI4smO_o', title: 'Trattoria Pane e Vino', position: {lat: 44.419777, lng: 26.115798}, address: 'Strada Nerva Traian, București', isOpen: false},
      {id: 'ChIJZwyjgwT_sUAR0tMUYifcn4M', title: 'Thalia Restaurant', position: {lat: 44.416313, lng: 26.106931}, address: 'Strada Cuza Vodă 147, București', isOpen: false},
      {id: 'ChIJM8_2h-T-sUARp29QHezF6TQ', title: 'Restaurant Casa Brânduşa', position: {lat: 44.416288, lng: 26.124088}, address: 'Strada Brândușelor 56, București', isOpen: false},
      {id: 'ChIJI9wTW_7-sUARPkVvocUuoFA', title: 'At Călinescu Tavern', position: {lat: 44.410494, lng: 26.112488}, address: 'Strada Piscului 16, București', isOpen: false},
      {id: 'ChIJkaJhHPn-sUARIzQDR8Q6CB0', title: 'Bohemia', position: {lat: 44.408599, lng: 26.118087}, address: 'Bulevardul Tineretului 55, București', isOpen: false},
      {id: 'ChIJl86ffFb-sUARhLh7M6DGkp8', title: 'Casa Oprescu', position: {lat: 44.406775, lng: 26.112055}, address: 'Strada Secerei, București', isOpen: false},
      {id: 'ChIJ0yKCLlT-sUARWYCyftq-z6w', title: 'Trattoria Rossini', position: {lat: 44.404736, lng: 26.111589}, address: 'Calea Piscului 10, București', isOpen: false},
      {id: 'ChIJkTKjVAn_sUARROPu0HCkWSk', title: 'Il Cantuccio', position: {lat: 44.416765, lng: 26.093083}, address: 'Strada Fabrica de Chibrituri 2, București', isOpen: false}
    ],

    defaultPosition: [
      {
        currentPosition: { lat: 44.418091, lng: 26.123015 },
        zoom: 15
      }
    ]
  }

  handleToggleOpen = (id) => {
    this.setState((state) => ({
      locations: state.locations.map((l) => {
        if(l.id === id && !l.isOpen){
          l.isOpen = true;
          return l;
        } else if(l.id !== id && l.isOpen){
            l.isOpen = false;
            return l;
        } else
            return l;
      })
    }))

    this.zoomToArea(id);
  }

  handleToggleClose = (id) => {
    this.setState((state) => ({
      locations: state.locations.map((l) => {
        if(l.id === id && l.isOpen){
          l.isOpen = false;
          return l;
        } else 
          return l;
      })
    }))

    this.zoomOut();
  }

  zoomToArea = (id) => {
    let loc = {
      currentPosition: '',
      zoom: 17
    };
    let array = [];
    this.state.locations.filter((r) => id === r.id).map((l) => loc.currentPosition = l.position);
    
    array.push(loc);
    this.setState({ defaultPosition: array })
  }

  zoomOut = () => {
    const loc = [ {
      currentPosition: { lat: 44.418091, lng: 26.123015 },
      zoom: 15
    }]

    this.setState({ defaultPosition: loc })
  }

  render() {
    return (
      <div className='app'>
        <div className='floating-panel'>
          <SearchBox />
          <FloatingPanel 
            restaurants={this.state.locations} 
            handleToggleOpen={this.handleToggleOpen}
            handleToggleClose={this.handleToggleClose}
          />
        </div>
        <MapComponent 
          locations={this.state.locations}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing,places&v=3&key=AIzaSyD0STGhDzOr2KtMAf6Qp9cir6yLZuaybbE`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100vh`, width: `100vw` }} id='map'/>}
          mapElement={<div style={{ height: `100%` }} />}
          handleToggleOpen={this.handleToggleOpen}
          handleToggleClose={this.handleToggleClose}
          currentPosition={this.state.defaultPosition}
        />
      </div>
    );
  }
}

export default App;