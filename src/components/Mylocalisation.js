import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';




class Mylocalisation extends Component {

    render() {   
        return (
            <Map google={this.props.google} zoom={14}>
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
     
            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                   <h1></h1>
                </div>
            </InfoWindow>
          </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCBbqS5bEAPKVwNUF6VHRhxoKWCLf6WSnQ")
  })(Mylocalisation)