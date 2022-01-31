// Importing screens
import DiscussionHomePage from "./DiscussionHomePage";
import DiscussionSearchPage from "./DiscussionSearchPage"

// importing for Navigation
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';

// const Drawer = createDrawerNavigator();
const DiscussionScreens = {
  DiscussionHome: {
    screen: DiscussionHomePage,
    navigationOptions:{
      headerShown: false
    }
  },
  DiscussionSearch: {
    screen: DiscussionSearchPage,
    navigationOptions:{
      headerShown: false
    }
  }
}

const DiscussionStack = createStackNavigator(DiscussionScreens);

export default createAppContainer(DiscussionStack);