import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// screens
import {Home, Categories, Account} from './src/screens';

// components
import BottomNavigation from './src/components/bottomNavigation';

// styles
import globalStyles from './src/styles/GlobalStyles';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={BottomNavigation} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Account" component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
