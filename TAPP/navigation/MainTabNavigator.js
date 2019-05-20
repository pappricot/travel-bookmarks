import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import Search from "../screens/Search";

export default (HomeStack = createStackNavigator(
  { HomeScreen, Search },
  { headerMode: "none", initialRouteName: "HomeScreen" },
  { navigationOptions: { drawerLabel: () => null } }
));
