import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { Button, Text } from 'native-base';

import student from './../../api/student';

const ACCOMPAGNISTS = [{
    latitude: 48.8534,
    longitude: 2.3488,
    price: 20,
    id: 1
}, {
    latitude: 48.8167,
    longitude: 2.3833,
    price: 40,
    id: 2
}, {
    latitude: 48.95,
    longitude: 2.8667,
    price: 30,
    accompagnistId: 3
}, {
    latitude: 48.95,
    longitude: 2.95,
    price: 15,
    id: 4
},
{
    latitude: 45.750000,
    longitude: 4.850000,
    price: 24,
    id: 2
}, {
    latitude: 48.9333,
    longitude: 2.9,
    price: 20,
    id: 5
}];

export default class MapScreen extends Component {
     state = {
        mapRegion: null,
        lastLat: null,
        lastLong: null,
         accompanists: ACCOMPAGNISTS
    };

    componentWillMount() {

        console.log(ACCOMPAGNISTS);
        /*student.mapAccompanist().then(res => {
            this.setState({accompanists: res})
            //console.log(res);
        })
      console.log("JE SUIS ----------> MapACCOM");
        student.mapAccom() 
            .then(response => {
                console.log("RESPONSE ------> MapACCOM", response);
                this.setState({
                    accompanists: response
                });
            })
            .catch(error => {
                console.log("PROFILE",error.response);
            });*/
    }

    componentDidMount() {
        this.watchID = navigator.geolocation.watchPosition((position) => {
            // Create the object to update this.state.mapRegion through the onRegionChange function
            // console.log(networkCheck());
            let region = {
                latitude:       position.coords.latitude,
                longitude:      position.coords.longitude,
                latitudeDelta:  0.00922*90,
                longitudeDelta: 0.00421*85
            };
            this.onRegionChange(region, region.latitude, region.longitude);
        });
    }

    goToNewPage(localisation) {
        console.log(localisation);
        this.props.navigation.navigate('AccompagnistsLocalisationList', localisation);
    }

    onRegionChange(region, lastLat, lastLong) {
        this.setState({
            mapRegion: region,
            // If there are no new values set use the the current ones
            lastLat: lastLat || this.state.lastLat,
            lastLong: lastLong || this.state.lastLong
        });
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <MapView
                    style={styles.map}
                    region={this.state.mapRegion}
                    showsUserLocation={true}
                    followUserLocation={true}
                    onRegionChange={this.onRegionChange.bind(this)} >
                    {this.state.accompanists.map((accompagnist) => (
                        <MapView.Marker
                            key={accompagnist.id}
                            coordinate={{
                                latitude: Number(accompagnist.latitude),
                                longitude: Number(accompagnist.longitude)
                            }}>
                            <MapView.Callout>
                                <View>
                                    <Text style={styles.price}>{accompagnist.price + " €"}</Text>
                                    <Button transparent info onPress={() => this.props.navigation.navigate('MapInfo', accompagnist)}>
                                        <Text>Plus dinfo</Text>
                                    </Button>
                                </View>
                            </MapView.Callout>
                        </MapView.Marker>
                    ))}
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    tooltip: {
        backgroundColor: 'white'
    },
    price: {
        fontSize: 30,
        textAlign: 'center'
    }
});