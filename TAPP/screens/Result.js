import React from "react";
import { View, TouchableOpacity } from "react-native";
import MyMapView from "../components/MapView";
import { getLocation } from "../services/LocationService";

class Search extends React.Component {
  state = {
    region: {}
  };

  onMapRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View style={{ flex: 1, margin: 20 }}>
        {this.state.region["latitude"] ? (
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
