import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// type PropsType = {
//     initialRegion: { latitude: number, longitude: number, latitudeDelta: number, longitudeDelta: number },
//     onRegionChangeComplete?: (region: any) => void,
//     onPress?: (event: any) => void,
//     preventCenter?: boolean,
//     options?: {
//         zoomControl?: boolean,
//         mapTypeControl?: boolean,
//         scaleControl?: boolean,
//         streetViewControl?: boolean,
//         rotateControl?: boolean,
//         fullscreenControl?: boolean
//     }
// }
class Mapa extends Component {
    mapa;
    state;
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: props.initialRegion.latitude,
                longitude: props.initialRegion.longitude,
                latitudeDelta: 0.07,
                longitudeDelta: 0.07,
            },
        };
        this.mapa = false;
    }

    getZoom = (region) => {
        var promedio = (region.longitudeDelta + region.latitudeDelta)
        let zoom = Math.round(promedio * 100)
        return zoom
    }

    getposition = () => {
        var _map = this.mapa;

    }


    componentDidMount() {
        this.getposition();
    }


    setMarker() {

    }
    animateToRegion(region, time) {
        // this.mapa.animateToRegion(region, !time ? 1000 : time);
        this.state.region = { ...this.state.region, ...region };
        this.setState({ ...this.state });

    }
    render() {
        return (
            <>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDYLp8tqYQvGbQLdL0BbsAGYaXWr8dxTUg" }}
                    defaultCenter={{
                        lat: this.state.region.latitude,
                        lng: this.state.region.longitude
                    }}
                    center={{
                        lat: this.state.region.latitude,
                        lng: this.state.region.longitude
                    }}
                    options={{
                        // styles: STheme.color.mapStyle,
                        ...(this.props.options ?? {})
                    }}
                    defaultZoom={this.getZoom(this.state.region)}
                    onGoogleApiLoaded={({ map, maps }) => {
                        this.mapa = map
                        if (this.props.onGoogleApiLoaded) {
                            this.props.onGoogleApiLoaded({ map, maps })
                        }
                    }}
                    onClick={(evt) => {
                        if (this.props.onPress) {
                            var latitude = evt.lat;
                            var longitude = evt.lng;
                            var latLng = { latitude: latitude, longitude: longitude };
                            this.props.onPress(latLng);
                        }
                    }}
                    onZoomAnimationEnd={(evt) => {
                        var center = {
                            latitude: this.mapa.center.lat(),
                            longitude: this.mapa.center.lng(),
                        }
                        if (this.props.onRegionChangeComplete) this.props.onRegionChangeComplete(center);
                    }}
                    onDragEnd={(evt) => {
                        var center = {
                            latitude: evt.center.lat(),
                            longitude: evt.center.lng(),
                        }
                        if (this.props.onRegionChangeComplete) this.props.onRegionChangeComplete(center);
                    }}
                >
                    {this.props.children}
                </GoogleMapReact>
            </>
        );
    }
}

export default Mapa;
