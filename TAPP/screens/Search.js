import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import MapInput from "../components/MapInput";
import MyMapView from "../components/MapView";
import { getLocation } from "../services/LocationService";
import { connect } from "react-redux";
import { save_data_dev } from "../redux/actions/actions";

class Search extends React.Component {
  state = {
    region: {},
    mapVisible: false,
    address: "",
    changePin: false
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
        longitudeDelta: 0.003,
        formatted_address: location.formatted_address
      }
    });
  }

  getCoordsFromName(loc, address) {
    this.updateState({
      latitude: loc.lat,
      longitude: loc.lng,
      address: address
    });
  }

  onMapRegionChange(region) {
    this.setState({ region });
  }

  toggleMap = () => {
    this.setState(prevState => ({
      mapVisible: !prevState.mapVisible
    }));
  };

  changePin = () => {
    this.setState(prevState => ({
      changePin: !prevState.changePin
    }));
    this.props.dispatch(save_data_dev("changePin", true));
    // alert("changePin", this.props);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.mapVisible ? null : (
          <View style={{ flex: 0.4, margin: 20, top: 30 }}>
            <MapInput
              notifyChange={
                ((loc, adr) => this.getCoordsFromName(loc, adr), this.toggleMap)
              }
            />
          </View>
        )}
        {this.state.region["latitude"] && this.state.mapVisible ? (
          <ScrollView>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 0
              }}
            >
              <TouchableOpacity
                style={{
                  position: "absolute",
                  zIndex: 1,
                  left: 10,
                  top: 40
                }}
                onPress={() => {
                  this.props.navigation.navigate("HomeScreen");
                }}
              >
                <Image source={require("../assets/images/goIconReverse.png")} />
              </TouchableOpacity>

              <Image
                source={require("../assets/images/placeCardBackground2x.png")}
              />
            </View>

            <View
              style={{
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 20,
                paddingBottom: 20,
                bottom: 20,
                backgroundColor: "white",
                borderRadius: 10,
                borderWidth: 0,
                borderColor: "#fff"
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 10
                }}
              >
                <TouchableOpacity
                  style={
                    this.state.changePin
                      ? {
                          height: 50,
                          width: 300,
                          backgroundColor: "#00FF1C",
                          borderRadius: "30%"
                        }
                      : {
                          height: 50,
                          width: 300,
                          backgroundColor: "#1313AF",
                          borderRadius: "30%"
                        }
                  }
                  onPress={this.changePin}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      marginTop: 15,
                      fontFamily: "sf-pro-display-regular",
                      color: "white",
                      fontSize: 18,
                      letterSpacing: 0.55,
                      lineHeight: 21
                    }}
                  >
                    {this.state.changePin ? "Pinned to Trip" : "Pin to Trip"}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, alignSelf: "center" }}>
                <Text>
                  {this.state.region.longitude}
                  {/* formatted_address is supposed to be here instead of lat and lng but it didn't display, to not leave it blank i added lat and lng */}
                </Text>
                <Text>
                  {this.state.region.latitude}
                  {/* formatted_address is supposed to be here instead of lat and lng but it didn't display, to not leave it blank i added lat and lng */}
                </Text>
              </View>
              <View>
                <MyMapView
                  region={this.state.region}
                  onRegionChange={reg => this.onMapRegionChange(reg)}
                />
              </View>
            </View>
          </ScrollView>
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  changePin: state.main
});

export default connect(mapStateToProps)(Search);
