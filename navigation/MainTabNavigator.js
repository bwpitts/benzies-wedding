import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import InfoScreen from '../screens/InfoScreen';
import RegistryScreen from '../screens/RegistryScreen';
import GalleryScreen from '../screens/GalleryScreen';
import ItineraryScreen from '../screens/ItineraryScreen';
import LogInScreen from '../screens/LogInScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const InfoStack = createStackNavigator({
  Info: InfoScreen,
});

InfoStack.navigationOptions = {
  tabBarLabel: 'Info',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}
    />
  ),
};

const RegistryStack = createStackNavigator({
    Registry: RegistryScreen,
});

RegistryStack.navigationOptions = {
    tabBarLabel: 'Registry',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-list${focused ? '' : '-outline'}` : 'md-list'}
        />
    ),
};

const ItineraryStack = createStackNavigator({
    Itinerary: ItineraryScreen,
});

ItineraryStack.navigationOptions = {
    tabBarLabel: 'Itinerary',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-time${focused ? '' : '-outline'}` : 'md-time'}
        />
    ),
};

const GalleryStack = createStackNavigator({
  Gallery: GalleryScreen,
});

GalleryStack.navigationOptions = {
  tabBarLabel: 'Photos',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-camera${focused ? '' : '-outline'}` : 'md-camera'}
    />
  ),
};

const LogInStack = createStackNavigator({
    LogIn: LogInScreen,
});

LogInStack.navigationOptions = {
    tabBarLabel: 'Log In',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-login${focused ? '' : '-outline'}` : 'md-login'}
        />
    ),
};

export default createBottomTabNavigator({
    HomeStack,
    InfoStack,
    RegistryStack,
    ItineraryStack,
    GalleryStack
});