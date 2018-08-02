import React, { Component } from 'react';
import './App.css';
import MapComponent from './Map.js';
import FloatingPanel from './FloatingPanel.js';
import SearchBox from './SearchBox.js';
import escapeRegExp from 'escape-string-regexp';

class App extends Component {

  state = {
    locations:[
      {id: '57967c29498ecfecfe4018a8', title: "Vu's Rooftop Restaurant", position: {lat: 44.425543, lng: 26.106787}, address: 'Splaiul Unirii, nr. 6, bloc B3A, etaj 8, Bucuresti', isOpen: false},
      // {id: '4b82a348f964a520e0db30e3', title: 'Restaurant Beijing', position: {lat: 44.427528, lng: 26.124222}, address: 'Str. Verdetei, 11, Bucuresti', isOpen: false},
      // {id: '4daf16a4fc6063dbfa86915f', title: 'Restaurant Thang Long', position: {lat: 44.421457, lng: 26.107528}, address: 'Strada Bucur 11, Bucuresti', isOpen: false},
      // {id: '58b2dc009435a903b9762e96', title: 'Sardin', position: {lat: 44.42002, lng: 26.112973}, address: 'Bulevardul Mircea Voda 39H, Bucuresti', isOpen: false},
      // {id: '4f044c31f79000b5dd2382a5', title: 'Trattoria Pane e Vino', position: {lat: 44.419777, lng: 26.115798}, address: 'Strada Nerva Traian, Bucuresti', isOpen: false},
      // {id: '4cc1bff8914137048b44af55', title: 'Thalia Restaurant', position: {lat: 44.416313, lng: 26.106931}, address: 'Strada Cuza Voda 147, Bucuresti', isOpen: false},
      // {id: '4e0b6eb318388f71c35f63a9', title: 'Restaurant Casa Brandusa', position: {lat: 44.416288, lng: 26.124088}, address: 'Strada Branduselor 56, Bucuresti', isOpen: false},
      // {id: '4c2646a4db5195213c5e2c3a', title: 'At Calinescu Tavern', position: {lat: 44.410494, lng: 26.112488}, address: 'Strada Piscului 16, Bucuresti', isOpen: false},
      // {id: '56ab9d7b498eddf7b7021101', title: 'Bohemia', position: {lat: 44.408599, lng: 26.118087}, address: 'Bulevardul Tineretului 55, Bucuresti', isOpen: false},
      // {id: '4e15ebbaae60a0ac0637373b', title: 'Casa Oprescu', position: {lat: 44.406775, lng: 26.112055}, address: 'Strada Secerei, Bucuresti', isOpen: false},
      // {id: '56439b3b498ed6a787d7e5f5', title: 'Trattoria Rossini', position: {lat: 44.404736, lng: 26.111589}, address: 'Calea Piscului 10, Bucuresti', isOpen: false},
      {id: '4b62c590f964a52009522ae3', title: 'Il Cantuccio', position: {lat: 44.416765, lng: 26.093083}, address: 'Strada Fabrica de Chibrituri 2, Bucuresti', isOpen: false}
    ],

    defaultPosition: [
      {
        currentPosition: { lat: 44.418091, lng: 26.123015 },
        zoom: 15
      }
    ],

    details: [],

    query: ''
  }

//Handle the event when a marker or list item is clicked
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

//Handle the event when a marker's Close button or the list item is clicked again
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

//Zoomig in to the area where the restaurant is positioned
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

//Zooming out when list item clicked again or marker's close button clicked
  zoomOut = () => {
    const loc = [ {
      currentPosition: { lat: 44.418091, lng: 26.123015 },
      zoom: 15
    }]

    this.setState({ defaultPosition: loc })
  }


  updateQuery=(query) => {
    this.setState({ query });
  }

  clearQuery=() => {
    this.setState({ query: '' });
  }

//Rendering the app
  render() {

    //updating the view with based on the value introduced in search box
    let showingRestaurants;
    if(this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i');
      showingRestaurants = this.state.locations.filter((restaurant) => match.test(restaurant.title) || match.test(restaurant.address));
    } else {
      showingRestaurants = this.state.locations;
    }
    
    //rendering the view
    return (
      <div className='app'>
        <div className='floating-panel'>
          <SearchBox 
            updateQuery={this.updateQuery} 
            clearQuery={this.clearQuery}
            query={this.state.query}
          />
            <FloatingPanel 
            restaurants={showingRestaurants}
            handleToggleOpen={this.handleToggleOpen}
            handleToggleClose={this.handleToggleClose}
            />
        </div>
        <MapComponent 
          locations={showingRestaurants}
          details={this.state.details}
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