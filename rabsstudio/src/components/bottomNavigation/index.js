/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screens
import {Home, Categories, Search, Account, Message} from '../../screens';

// constants
import {
  home as HomeIcon,
  categories as CategoriesIcon,
  search as SearchIcon,
  account as AccountIcon,
  message as MessageIcon,
} from '../../constants/icons';

// static files

// initializing
const Tab = createBottomTabNavigator();

// styles
import globalStyles from '../../styles/GlobalStyles';
import {useTheme} from 'react-native-paper';

// custom tabButtonComponent
// == to be used later in this file ==
const TabBarCustomButton = ({
  accessibilityState,
  children,
  onPress,
  center,
}) => {
  let isSelected = accessibilityState.selected;
  const {colors, dark} = useTheme();

  if (center) {
    return (
      <TouchableOpacity
        style={[
          styles.centerTabWrapper,
          {
            backgroundColor: dark ? colors.background : colors.paper,
            borderWidth: dark ? 1 : 0,
            borderColor: isSelected ? colors.primary : colors.divider,
          },
        ]}
        onPress={onPress}>
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
  const {colors, dark} = useTheme();

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: [
          styles.root,
          {
            backgroundColor: colors.paper,
          },
        ],
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabButtonWrapper}>
              <HomeIcon
                style={styles.tabIcon}
                fill={focused ? colors.primary : colors.text}
              />
              <Text
                style={[
                  globalStyles.mt2,
                  globalStyles.txtXs,
                  {
                    color: focused ? colors.primary : colors.text,
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
                style={styles.tabIcon}
                fill={focused ? colors.primary : colors.text}
              />
              <Text
                style={[
                  globalStyles.mt2,
                  globalStyles.txtXs,
                  {
                    color: focused ? colors.primary : colors.text,
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
                style={styles.tabIcon}
                fill={focused ? colors.primary : colors.text}
              />
              <Text
                style={[
                  globalStyles.mt2,
                  globalStyles.txtXs,
                  {
                    color: focused ? colors.primary : colors.text,
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
              <MessageIcon
                style={styles.tabIcon}
                fill={focused ? colors.primary : colors.text}
              />
              <Text
                style={[
                  globalStyles.mt2,
                  globalStyles.txtXs,
                  {
                    color: focused ? colors.primary : colors.text,
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
                style={styles.tabIcon}
                fill={focused ? colors.primary : colors.text}
              />
              <Text
                style={[
                  globalStyles.mt2,
                  globalStyles.txtXs,
                  {
                    color: focused ? colors.primary : colors.text,
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
    borderTopWidth: 0,
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
