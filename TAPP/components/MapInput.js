import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { save_pin } from "../redux/actions/actions";
import { connect } from "react-redux";

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
          this.props.getData(details);

          this.props.dispatch(save_pin(details));
        }}
        query={{
          key: "AIzaSyBaSSNwo8wBkzB55idF8pBJTVfTIM00l0A",
          language: "en",
          fields: "basic"
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={200}
      />
    );
  }
}
export default connect()(MapInput);
