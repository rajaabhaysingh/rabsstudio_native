import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';

// redux
import {Provider} from 'react-redux';
import store from './src/redux/store';

// theming constants (combining paper & navigation themes)
const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

// screens
import {Categories, Account} from './src/screens';

// components
import BottomNavigation from './src/components/bottomNavigation';

// styles
// import globalStyles from './src/styles/GlobalStyles';

// constants
import {COLORS} from './src/constants';

const Stack = createStackNavigator();

const App = () => {
  const isDarkModeEnabled = true;

  // ---------- THEMEING STARTS HERE ----------
  const updatedDarkTheme = {
    ...CombinedDarkTheme,
    colors: {
      ...CombinedDarkTheme.colors,
      primary: COLORS.primary,
      divider: COLORS.darkgray,
      paper: COLORS.paper_dark,
    },
  };

  const updatedDefaultTheme = {
    ...CombinedDefaultTheme,
    colors: {
      ...CombinedDefaultTheme.colors,
      primary: COLORS.primary,
      divider: COLORS.lightGray,
      paper: COLORS.paper_light,
    },
  };
  // ----------- THEMEING ENDS HERE -----------

  return (
    <Provider store={store}>
      <PaperProvider
        theme={isDarkModeEnabled ? updatedDarkTheme : updatedDefaultTheme}>
        <NavigationContainer
          theme={isDarkModeEnabled ? updatedDarkTheme : updatedDefaultTheme}>
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
      </PaperProvider>
    </Provider>
  );
};

export default App;
