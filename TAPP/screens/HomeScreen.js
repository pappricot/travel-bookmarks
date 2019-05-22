import React from "react";
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from "react-native";
import { LinearGradient } from "expo";
import { connect } from "react-redux";

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    changePin: this.props.changePin
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <ImageBackground
            source={require("./weatherHeader.png")}
            style={{
              width: "100%",
              height: "100%",
              backgroundImage:
                "linear-gradient(-180deg, #fdfdfd 0%, rgba(253,253,253, 0.00) 98%)"
            }}
          >
            <View style={styles.weatherHeaderImage}>
              <View style={styles.weatherWrapper}>
                <Text style={styles.goodM}>Good Morning</Text>
                <Text style={styles.weather}>
                  Today is 72C and Sunny {this.props.changePin}
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Search");
                }}
                style={styles.addButton}
              >
                <Image source={require("./addBookmarkButton.png")} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        {this.props.changePin ? (
          <ScrollView horizontal>
            {this.props.pins.map((pin, i) => (
              <View key={i} style={styles.scrollStyle}>
                <TouchableOpacity
                  style={styles.goIcon}
                  // onPress={() => {
                  //   this.props.navigation.navigate("Result");
                  // }}
                >
                  <Image source={require("../assets/images/goIcon.png")} />
                </TouchableOpacity>
                <View style={styles.description}>
                  <Text style={styles.pinName}>{pin.name}</Text>
                  <View style={styles.ratingR}>
                    <Image source={require("../assets/images/heartIcon.png")} />
                    <Text style={styles.rating}>{pin.rating}</Text>
                  </View>
                </View>

                <Image
                  style={styles.imageAPI}
                  source={{
                    uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${
                      pin.photos[0].photo_reference
                    }&key=AIzaSyBaSSNwo8wBkzB55idF8pBJTVfTIM00l0A`
                  }}
                />
              </View>
            ))}
          </ScrollView>
        ) : (
          <LinearGradient
            colors={["white", "#CEDCDF"]}
            style={styles.blankBookmarks}
          >
            <View style={styles.body}>
              <Text style={styles.empty1}>This trip is empty</Text>
              <Text style={styles.empty2}>
                Click the blue plus to pin a place
              </Text>
            </View>
          </LinearGradient>
        )}

        <View style={styles.footer_container}>
          <View style={styles.footer_panel}>
            <LinearGradient
              colors={["white", "#CEDCDF"]}
              style={styles.imageFooter}
            >
              <ImageBackground
                source={require("./tripBackground.png")}
                style={styles.imageFooter1}
              >
                <View style={styles.textFooteerWr}>
                  <Text style={styles.line1}>Exploring Louisville BBQ</Text>
                  <Text style={styles.line2}>Louisville, Kentucky</Text>
                </View>
              </ImageBackground>
            </LinearGradient>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  changePin: state.main.options.changePin,
  pins: state.main.pins
});

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1
  },
  header: {
    flex: 2
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  footer_container: {
    flex: 4,
    flexDirection: "row"
  },
  footer_panel: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0)"
  },
  weatherHeaderImage: {
    flex: 1,
    flexDirection: "row",
    margin: 30,
    paddingTop: 20
  },
  weatherWrapper: {
    flex: 4,
    flexDirection: "column"
  },
  goodM: {
    fontFamily: "sf-pro-display-light",
    color: "rgba(10,10,10,1)",
    fontSize: 32,
    letterSpacing: 0.3,
    lineHeight: 38
  },
  weather: {
    fontFamily: "sf-pro-display-medium",
    color: "rgba(56,56,56,1)",
    fontSize: 13,
    letterSpacing: 0.15,
    lineHeight: 15
  },
  addButton: { flex: 1 },
  scrollStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10
  },
  goIcon: {
    position: "absolute",
    zIndex: 1,
    right: 20,
    bottom: 60
  },
  description: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    zIndex: 1,
    paddingTop: 220,
    paddingRight: 90
  },
  pinName: {
    color: "white",
    paddingRight: 5,
    fontFamily: "sf-pro-display-regular",

    fontSize: 20,
    letterSpacing: 0.33,
    lineHeight: 29
  },
  ratingR: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    marginLeft: 5,
    borderRadius: 30,
    width: 50
  },
  rating: {
    color: "#1313AF",

    fontFamily: "sf-pro-display-regular",

    fontSize: 13,
    letterSpacing: 0.33,
    lineHeight: 15
  },
  imageAPI: { height: 300, width: 300, borderRadius: 10 },
  blankBookmarks: {
    position: "relative",
    left: 0,
    right: 0,
    top: 0,
    flex: 3
  },
  empty1: {
    fontFamily: "sf-pro-display-regular",
    color: "rgba(128,128,128,1)",
    fontSize: 18,
    letterSpacing: 0.55,
    lineHeight: 21
  },
  empty2: {
    fontFamily: "sf-pro-display-regular",
    color: "rgba(172,183,185,1)",
    fontSize: 13,
    letterSpacing: 0.4,
    lineHeight: 15
  },
  imageFooter: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%"
  },
  imageFooter1: {
    width: "100%",
    height: "100%"
  },
  textFooteerWr: {
    flex: 1,
    justifyContent: "flex-end",
    margin: 20
  },
  line1: {
    fontFamily: "sf-pro-display-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 23,
    letterSpacing: 0.4,
    lineHeight: 22
  },
  line2: {
    fontFamily: "sf-pro-display-regular",
    color: "rgba(212,201,215,1)",
    fontSize: 16,
    letterSpacing: 0.28,
    lineHeight: 22
  }
});
