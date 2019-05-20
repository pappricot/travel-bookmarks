import React from "react";
import { View } from "react-native";
import MapInput from "../components/MapInput";
import MyMapView from "../components/MapView";
import { getLocation } from "../services/LocationService";

class Search extends React.Component {
  state = {
    region: {}
  };

  componentDidMount() {
    this.getInitialState();
  }

  getInitialState() {
    getLocation().then(data => {
      this.updateState({
        latitude: data.latitude,
        longitude: data.longitude
      });
    });
  }

  updateState(location) {
    this.setState({
      region: {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003
      }
    });
  }

  getCoordsFromName(loc) {
    this.updateState({
      latitude: loc.lat,
      longitude: loc.lng
    });
  }

  onMapRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View style={{ flex: 1, margin: 20 }}>
        <View style={{ flex: 1, marginTop: 20 }}>
          <MapInput
            notifyChange={loc => this.getCoordsFromName(loc)}
            navigation={this.props.navigation}
          />
        </View>
      </View>
    );
  }
}

export default Search;
