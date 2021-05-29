/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

// styles
import globalStyles from '../../styles/GlobalStyles';
import {useTheme} from 'react-native-paper';

// constants
import {COLORS} from '../../constants';
import {
  hamburger as MenuIcon,
  notification as BellIcon,
} from '../../constants/icons';

const Header = () => {
  const {colors, dark} = useTheme();

  return (
    <SafeAreaView styles={styles.root}>
      <View
        style={[
          styles.header,
          {
            backgroundColor: colors.paper,
          },
        ]}>
        <TouchableOpacity style={styles.iconBtn}>
          <MenuIcon
            style={styles.icon}
            fill={dark ? COLORS.white : COLORS.black}
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              color: colors.text,
            }}>
            Hello
          </Text>
        </View>
        <TouchableOpacity style={styles.iconBtn}>
          <BellIcon
            style={styles.icon}
            fill={dark ? COLORS.white : COLORS.black}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  iconBtn: {
    padding: 4,
  },
  icon: {
    height: 24,
    width: 24,
  },
  header: {
    height: 48,
    borderRadius: 8,
    position: 'absolute',
    left: 8,
    top: 8,
    right: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    ...globalStyles.shadMd,
  },
});

export default Header;
