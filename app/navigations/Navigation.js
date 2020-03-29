import React from "react";
import { Icon } from "react-native-elements";

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import RestaurantsScreenStacks from "./RestaurantsStack";
import TopListsScreenStacks from "./TopListsStacks";
import SearchScreenStacks from "./SearchStacks";
import AccountScreenStacks from "./AccountStacks";

const NavigationStack = createBottomTabNavigator(
  {
    //nuestro stack de navegacion
    Restaurants: {
      screen: RestaurantsScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Restaurantes",
        tabBarIcon: ({ tintColor }) => {
          <Icon
            type="material-community"
            name="compass-outline"
            size={22}
            color={tintColor}
          />;
        }
      })
    },
    TopLists: {
      screen: TopListsScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Ranking",
        tabBarIcon: ({ tintColor }) => {
          <Icon
            type="material-community"
            name="compass-outline"
            size={22}
            color={tintColor}
          />;
        }
      })
    },
    Search: {
      screen: SearchScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Search",
        tabBarIcon: ({ tintColor }) => {
          <Icon
            type="material-community"
            name="magnify"
            size={22}
            color={tintColor}
          />;
        }
      })
    },
    Account: {
      screen: AccountScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Cuenta",
        tabBarIcon: ({ tintColor }) => {
          <Icon
            type="material-community"
            name="compass-outline"
            size={22}
            color={tintColor}
          />;
        }
      })
    }
  },
  {
    initialRouteName: "Account",
    order: ["Restaurants", "TopLists", "Search", "Account"],
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#00a680"
    }
  }
);

export default createAppContainer(NavigationStack);
