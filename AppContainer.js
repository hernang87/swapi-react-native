import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AppHeader from './AppHeader'
import * as Screens from './containers';

const AppNavigator = createStackNavigator({
  Home: { 
    screen: Screens.HomePage,
    navigationOptions: {
      headerTitle: 'Star Wars Films'
    }
  },
  FilmDetailsPage: { 
    screen: Screens.FilmDetailsPage    
  },
}, {
  initialRouteName: 'Home',
  headerMode: 'float'
});

export default createAppContainer(AppNavigator);