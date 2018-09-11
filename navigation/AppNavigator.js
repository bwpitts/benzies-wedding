import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoadingScreen from '../screens/AuthLoadingScreen';
import LogInScreen from '../screens/LogInScreen';

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading: LoadingScreen,
    Auth: LogInScreen,
    Main: MainTabNavigator,
});