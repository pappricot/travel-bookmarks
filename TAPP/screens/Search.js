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
    rating: "",
    name: "",
    image: null,
    changePin: false,
    photo: ""
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

  toggleMap = () => {
    this.setState(prevState => ({
      mapVisible: !prevState.mapVisible
    }));
  };

  getData = data => {
    this.setState({
      address: data.formatted_address, // selected address
      rating: data.rating,
      name: data.name,
      photo: data.photos && data.photos.length > 0 ? data.photos[0] : null
    });
  };

  changePin = () => {
    this.setState(prevState => ({
      changePin: !prevState.changePin
    }));
    this.props.dispatch(save_data_dev("changePin", true));
    // alert("changePin", this.props);
  };

  render() {
    console.warn(this.state.photo);

    const photoUri = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${
      this.state.photo.photo_reference
    }&key=AIzaSyBaSSNwo8wBkzB55idF8pBJTVfTIM00l0A`;

    console.warn(photoUri);

    window["state"] = this.state;

    return (
      <View style={{ flex: 1 }}>
        {this.state.mapVisible ? null : (
          <View style={{ flex: 0.4, margin: 20, top: 30 }}>
            <MapInput
              notifyChange={
                (loc => this.getCoordsFromName(loc), this.toggleMap)
              }
              getData={data => this.getData(data)}
            />
          </View>
        )}
        {this.state.region["latitude"] && this.state.mapVisible ? (
          <ScrollView>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TouchableOpacity
                style={{
                  position: "absolute",
                  zIndex: 1,
                  left: 20,
                  top: 60
                }}
                onPress={() => {
                  this.props.navigation.navigate("HomeScreen");
                }}
              >
                <Image source={require("../assets/images/goIconReverse.png")} />
              </TouchableOpacity>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  position: "absolute",
                  zIndex: 1,
                  paddingTop: 350
                }}
              >
                <Text
                  style={{
                    color: "white",
                    paddingRight: 70,
                    fontFamily: "sf-pro-display-regular",

                    fontSize: 24,
                    letterSpacing: 0.33,
                    lineHeight: 29
                  }}
                >
                  {this.state.name}
                </Text>
                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    backgroundColor: "white",
                    marginLeft: 70,
                    borderRadius: "30%",
                    width: 50
                  }}
                >
                  <Image source={require("../assets/images/heartIcon.png")} />
                  <Text
                    style={{
                      color: "#1313AF",

                      fontFamily: "sf-pro-display-regular",

                      fontSize: 13,
                      letterSpacing: 0.33,
                      lineHeight: 15
                    }}
                  >
                    {this.state.rating}
                  </Text>
                </View>
              </View>

              <Image
                style={{
                  // width: this.state.photo.width / 2,
                  // height: this.state.photo.height / 2
                  width: 500,
                  height: 500
                }}
                source={{ uri: photoUri }} //for google image
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
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Image
                    source={require("../assets/images/townPinIcon2x.png")}
                  />
                  <Text style={{ fontFamily: "sf-pro-display-semibold" }}>
                    {" "}
                    {this.state.name}
                  </Text>
                </View>

                <Text>{this.state.address}</Text>
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
  // changePin: state.main
});

export default connect(mapStateToProps)(Search);
