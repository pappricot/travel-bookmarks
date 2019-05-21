import React from "react";
import { MapView } from "expo";

const MyMapView = props => {
  return (
    <MapView
      style={{ alignSelf: "stretch", height: 200, marginTop: 30 }}
      region={props.region}
      showsUserLocation={true}
      onRegionChange={reg => props.onRegionChange(reg)}
    >
      <MapView.Marker coordinate={props.region} />
    </MapView>
  );
};

export default MyMapView;
