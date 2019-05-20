import React from "react";
import { View } from "react-native";
import MapInput from "../components/MapInput";
import MyMapView from "../components/MapView";
import { getLocation } from "../services/LocationService";

class Search extends React.Component {
  state = {
    region: {},
    mapVisible: false
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

  onMapRegionChange(region, prevState) {
    this.setState({ region });
  }

  toggleMap = () => {
    this.setState(prevState => ({
      mapVisible: !prevState.mapVisible
    }));
  };
  render() {
    return (
      <View style={{ flex: 1, margin: 20 }}>
        {this.state.mapVisible ? null : (
          <View style={{ flex: 0.4 }}>
            <MapInput
              notifyChange={
                (loc => this.getCoordsFromName(loc), this.toggleMap)
              }
              navigation={this.props.navigation}
            />
          </View>
        )}
        {this.state.region["latitude"] && this.state.mapVisible ? (
          <View style={{ flex: 1 }}>
            <MyMapView
              region={this.state.region}
              onRegionChange={reg => this.onMapRegionChange(reg)}
            />
          </View>
        ) : null}
      </View>
    );
  }
}

export default Search;
