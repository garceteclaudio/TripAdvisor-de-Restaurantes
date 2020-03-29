import { createStackNavigator } from "react-navigation-stack";
import MyAccountScreen from "../screens/account/MyAccount";

const AccountScreenStacks = createStackNavigator({
  Restaurants: {
    screen: MyAccountScreen,
    navigationOptions: () => ({
      title: "Mi cuenta"
    })
  }
});

export default AccountScreenStacks;
