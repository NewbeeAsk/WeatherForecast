import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Maps extends Component {
    constructor(props) {
        super(props);
    }
    default = {
        center: {
            lat: 50.45,
            lng: 30.52,
        },
        zoom: 11
    };

    render() {
        return (
            <div style={{ height: '50vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyC5VaQjjPJrlPA4q755dYVtqoFAW3CXIYI" }}
                    defaultCenter={this.default.center}
                    defaultZoom={this.default.zoom}
                    onClick={(childProps) => this.props.searchWeatherByCoordinates({lat: childProps.lat, lon: childProps.lng})}
                >
                </GoogleMapReact>
            </div>
        );
    }
}

export default Maps;