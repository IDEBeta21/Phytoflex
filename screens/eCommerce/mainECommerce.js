// Importing screens
import ShopHomePage from "./ShopMainPage";
import ShopSearchPage from "./ShopSearchPage"

// importing for Navigation
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';

// const Drawer = createDrawerNavigator();
const ShopScreen = {
  ShopHome: {
    screen: ShopHomePage,
    navigationOptions:{
      headerShown: false
    }
  },
  ShopSearch: {
    screen: ShopSearchPage,
    navigationOptions:{
      headerShown: false
    }
  }
}

const ShopStack = createStackNavigator(ShopScreen);

export default createAppContainer(ShopStack);