{this.props.changePin ? (
          
  ) : (
    <LinearGradient
      colors={["white", "#CEDCDF"]}
      style={{
        position: "relative",
        left: 0,
        right: 0,
        top: 0,
        flex: 3
      }}
    >
      <View style={styles.body}>
        <Text
          style={{
            fontFamily: "sf-pro-display-regular",
            color: "rgba(128,128,128,1)",
            fontSize: 18,
            letterSpacing: 0.55,
            lineHeight: 21
          }}
        >
          This trip is empty
        </Text>
        <Text
          style={{
            fontFamily: "sf-pro-display-regular",
            color: "rgba(172,183,185,1)",
            fontSize: 13,
            letterSpacing: 0.4,
            lineHeight: 15
          }}
        >
          Click the blue plus to pin a place
        </Text>
      </View>
    </LinearGradient>
  )}

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
                backgroundColor: "blue",
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
              />
              <View
                style={{ flex: 1, alignSelf: "center", backgroundColor: "red" }}
              >
                <Text>{data}</Text>
              </View>
            </View>

this.props.details.map((data, index) => {
    return (
      <ScrollView key={index}>
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
          />
          <View style={{ flex: 1, alignSelf: "center" }}>
            <Text>{data.address}</Text>
            <View>
              <Text>{data.image}</Text>
            </View>
          </View>
          {/* <View>
            <MyMapView
              region={data.region}
              onRegionChange={reg => this.onMapRegionChange(reg)}
            />
          </View> */}
        </View>
      </ScrollView>
    );
  }