import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';

export default class testCoords extends Component {

  state = {
    mapRegion: null,
    lastLat: null,
    lastLong: null,
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
      }
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
          onRegionChange={this.onRegionChange.bind(this)}
          >
          <MapView.Marker
                coordinate={{
                    latitude: 48.9562018,
                    longitude: 2.8884657
                }}
            >
            <MapView.Callout tooltip
                onPress={() => this.goToNewPage({
                    latitude: 48.9562018,
                    longitude: 2.8884657
                })}>
                <View style={styles.tooltip}>
                    <Text>Nom et prenom</Text>
                    <Text>Prix €</Text>
                </View>
            </MapView.Callout>
        </MapView.Marker>
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
  }
});

AppRegistry.registerComponent('testCoords', () => testCoords);
