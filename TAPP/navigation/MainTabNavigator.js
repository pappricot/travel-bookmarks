import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import Search from "../screens/Search";
import Result from "../screens/Result";

export default (HomeStack = createStackNavigator(
  { HomeScreen, Search, Result },
  { headerMode: "none", initialRouteName: "HomeScreen" },
  { navigationOptions: { drawerLabel: () => null } }
));
