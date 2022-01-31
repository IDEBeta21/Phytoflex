// Importing screens
import PlantCareHomePage from "../../screens/plantcare/plantCareHomePage";
import PlantCareSearchPage from "./plantCareSearch";

// importing for Navigation
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';

// const Drawer = createDrawerNavigator();
const PlantCareScreen = {
  PlantCareHome: {
    screen: PlantCareHomePage,
    navigationOptions:{
      headerShown: false
    }
  },
  PlantCareSearch: {
    screen: PlantCareSearchPage,
    navigationOptions:{
      headerShown: false
    }
  }
}

const PlantCareStack = createStackNavigator(PlantCareScreen);

export default createAppContainer(PlantCareStack);