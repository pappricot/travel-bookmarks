import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import MapInput from "../components/MapInput";
import MyMapView from "../components/MapView";
import { getLocation } from "../services/LocationService";
import { connect } from "react-redux";

class Result extends React.Component {
  static PropTypes = {
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    image: PropTypes.string,
    rating: PropTypes.string,
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 50
          }}
        >
          <Image source={require("../assets/images/placeCardBackground.png")} />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  // details: state.main.pins
});

export default connect(mapStateToProps)(Result);
