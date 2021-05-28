import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

// screens
import {Home, Categories, Search, Account, Message} from '../../screens';

// constants
import {COLORS} from '../../constants';
import {
  home as HomeIcon,
  categories as CategoriesIcon,
  search as SearchIcon,
  account as AccountIcon,
} from '../../constants/icons';

// static files
// import HomeIcon from '../../assets/icons/home.svg';

// initializing
const Tab = createBottomTabNavigator();

// styles
import globalStyles from '../../styles/GlobalStyles';

// custom tabButtonComponent
// == to be used later in this file ==
const TabBarCustomButton = ({
  accessibilityState,
  children,
  onPress,
  center,
}) => {
  let isSelected = accessibilityState.selected;

  if (center) {
    return (
      <TouchableOpacity style={styles.centerTabWrapper} onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={[styles.nonCenterTabWrapper, globalStyles.bgTrans]}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
};

// main component
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: styles.root,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabButtonWrapper}>
              <HomeIcon
                style={[
                  styles.tabIcon,
                  {
                    tintColor: focused ? COLORS.white : COLORS.secondary,
                  },
                ]}
              />
              <Text
                style={[
                  globalStyles.mt2,
                  {
                    color: focused ? COLORS.primary : COLORS.secondary,
                  },
                ]}>
                Home
              </Text>
            </View>
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabButtonWrapper}>
              <CategoriesIcon
                style={[
                  styles.tabIcon,
                  {
                    tintColor: focused ? COLORS.white : COLORS.secondary,
                  },
                ]}
              />
              <Text
                style={[
                  globalStyles.mt2,
                  {
                    color: focused ? COLORS.primary : COLORS.secondary,
                  },
                ]}>
                Categories
              </Text>
            </View>
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabButtonWrapper}>
              <SearchIcon
                style={[
                  styles.tabIcon,
                  {
                    tintColor: focused ? COLORS.white : COLORS.secondary,
                  },
                ]}
              />
              <Text
                style={[
                  globalStyles.mt2,
                  {
                    color: focused ? COLORS.primary : COLORS.secondary,
                  },
                ]}>
                Search
              </Text>
            </View>
          ),
          tabBarButton: props => <TabBarCustomButton center {...props} />,
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabButtonWrapper}>
              <CategoriesIcon
                style={[
                  styles.tabIcon,
                  {
                    tintColor: focused ? COLORS.white : COLORS.secondary,
                  },
                ]}
              />
              <Text
                style={[
                  globalStyles.mt2,
                  {
                    color: focused ? COLORS.primary : COLORS.secondary,
                  },
                ]}>
                Message
              </Text>
            </View>
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabButtonWrapper}>
              <AccountIcon
                style={[
                  styles.tabIcon,
                  {
                    tintColor: focused ? COLORS.white : COLORS.secondary,
                  },
                ]}
              />
              <Text
                style={[
                  globalStyles.mt2,
                  {
                    color: focused ? COLORS.primary : COLORS.secondary,
                  },
                ]}>
                Account
              </Text>
            </View>
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    left: 16,
    bottom: 16,
    right: 16,
    height: 48,
    borderRadius: 100,
    // borderTopWidth: 0,
    backgroundColor: COLORS.white,
    ...globalStyles.shadSm,
  },
  tabButtonWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tabIcon: {
    height: 20,
    width: 20,
  },
  centerTabWrapper: {
    top: -12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 72,
    height: 72,
    borderRadius: 100,
    backgroundColor: COLORS.white,
    ...globalStyles.shadSm,
  },
  activeTabContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nonCenterTabWrapper: {
    ...globalStyles.f1,
    borderRadius: 50,
  },
});

export default BottomNavigation;
