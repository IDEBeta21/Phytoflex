// Importing screens
import SocialMediaHomePage from "./SocialMediaHome";
import SocialMediaSearchPage from "./SocialMediaSearch";

// importing for Navigation
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';

// const Drawer = createDrawerNavigator();
const SocialMediaScreen = {
  SocialMediaHome: {
    screen: SocialMediaHomePage,
    navigationOptions:{
      headerShown: false
    }
  },
  SocialMediaSearch: {
    screen: SocialMediaSearchPage,
    navigationOptions:{
      headerShown: false
    }
  }
}

const SocialMediaStack = createStackNavigator(SocialMediaScreen);

export default createAppContainer(SocialMediaStack);