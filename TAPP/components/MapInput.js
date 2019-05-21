import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { save_data_dev } from "../redux/actions/actions";

class MapInput extends React.Component {
  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder="Search"
        minLength={2}
        autoFocus={true}
        returnKeyType={"search"}
        listViewDisplayed={true}
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          this.props.notifyChange(
            details.geometry.location,
            details.formatted_address
          );
          // this.props.dispatch(save_data_dev("data", true));
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
