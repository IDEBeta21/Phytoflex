import React from 'react';

// Importing screens
import PlantCareHomePage from "../../screens/plantcare/plantCareHomePage";
import PlantCareSearchPage from "./plantCareSearch";

import Header from "../global/Header";

// importing for Navigation
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';

// const Drawer = createDrawerNavigator();
const PlantCareScreen = {
  PlantCareHome: {
    screen: PlantCareHomePage,
    navigationOptions: ({navigation}) => {
      return{
        headerTitle: () => <Header title={'Plant Care'}/>
      }
    }
  },
  PlantCareSearch: {
    screen: PlantCareSearchPage,
    navigationOptions: ({navigation}) => {
      return{
        headerTitle: () => <Header title={'Plant Care'}/>
      }
    }
  }
}

const PlantCareStack = createStackNavigator(PlantCareScreen);

export default createAppContainer(PlantCareStack);