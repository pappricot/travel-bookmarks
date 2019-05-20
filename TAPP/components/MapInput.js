import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

class MapInput extends React.Component {
  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder="Search"
        minLength={2}
        autoFocus={true}
        returnKeyType={"search"}
        listViewDisplayed={false}
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          this.props.notifyChange(details.geometry.location);
          //   this.props.navigation.navigate("Result");
        }}
        query={{
          key: "AIzaSyBaSSNwo8wBkzB55idF8pBJTVfTIM00l0A",
          language: "en"
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={200}
      />
    );
  }
}
export default MapInput;
