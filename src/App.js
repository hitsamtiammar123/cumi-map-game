import React from 'react';
import { Alert,Button } from 'reactstrap';
import {
  GoogleMap,withScriptjs,withGoogleMap
} from 'react-google-maps';
import mapStyles from './mapStyles'
import './App.css';

const center={
  lat:54.525963,
  lng:15.255119
}

const options={
  styles:mapStyles,
  disabledDefaultUI:false,
  zoomControl:false
}

function Map(){
  return (
    <GoogleMap defaultZoom={5} defaultCenter={center} defaultOptions={options} onClick={(event)=>{
      console.log('Map kepencet',{lat:event.latLng.lat(),lng:event.latLng.lng()});
    }} />
  )
}

const WrappedMap=withScriptjs(withGoogleMap(Map));

function App() {
  console.log(process.env.REACT_APP_GOOGLE_MAP_API_KEY,'api key')

  return (
    <div className="App container"> 
      <Alert color="info">
        5 cities placed
      </Alert>
      <Alert color="info">
       361 kilometers left
      </Alert>
      <p>
        Select the location of "Amsterdam"
      </p>
      <div id="map">
        <WrappedMap  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_MAP_API_KEY
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
      <div className="d-flex flex-row-reverse mt-2">
        <Button color="info">place</Button>
      </div>
    </div>
  );
}

export default App;
