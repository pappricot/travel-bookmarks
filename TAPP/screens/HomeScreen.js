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
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                margin: 30,
                paddingTop: 20
              }}
            >
              <View
                style={{
                  flex: 4,
                  flexDirection: "column"
                }}
              >
                <Text
                  style={{
                    fontFamily: "sf-pro-display-light",
                    color: "rgba(10,10,10,1)",
                    fontSize: 32,
                    letterSpacing: 0.3,
                    lineHeight: 38
                  }}
                >
                  Good Morning
                </Text>
                <Text
                  style={{
                    fontFamily: "sf-pro-display-medium",
                    color: "rgba(56,56,56,1)",
                    fontSize: 13,
                    letterSpacing: 0.15,
                    lineHeight: 15
                  }}
                >
                  Today is 72C and Sunny {this.props.changePin}
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Search");
                }}
                style={{ flex: 1 }}
              >
                <Image source={require("./addBookmarkButton.png")} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        <ScrollView horizontal>
          {this.props.pins.map((pin, i) => (
            <View style={{ marginRight: 10 }}>
              <TouchableOpacity
                style={{
                  position: "absolute",
                  zIndex: 1,
                  right: 20,
                  bottom: 90
                }}
                onPress={() => {
                  this.props.navigation.navigate("Result");
                }}
              >
                <Image source={require("../assets/images/goIcon.png")} />
              </TouchableOpacity>
              <Image
                source={require("../assets/images/placeCardBackground.png")}
              />
            </View>
          ))}
        </ScrollView>

        <View style={styles.footer_container}>
          <View style={styles.footer_panel}>
            <LinearGradient
              // colors={["#fdfdfd", "rgba(253,253,253, 0)"]}
              colors={["white", "#CEDCDF"]}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                height: "100%"
              }}
            >
              <ImageBackground
                source={require("./tripBackground.png")}
                style={{
                  width: "100%",
                  height: "100%"
                }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    margin: 20
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "sf-pro-display-regular",
                      color: "rgba(255,255,255,1)",
                      fontSize: 23,
                      letterSpacing: 0.4,
                      lineHeight: 22
                    }}
                  >
                    Exploring Louisville BBQ
                  </Text>
                  <Text
                    style={{
                      fontFamily: "sf-pro-display-regular",
                      color: "rgba(212,201,215,1)",
                      fontSize: 16,
                      letterSpacing: 0.28,
                      lineHeight: 22
                    }}
                  >
                    Louisville, Kentucky
                  </Text>
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
    // shadowOpacity: 0.75,
    // shadowRadius: 15,
    // shadowColor: "grey"
  },
  footer_panel: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0)"
  }
});
