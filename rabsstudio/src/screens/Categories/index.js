import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// styles
import globalStyles from '../../styles/GlobalStyles';

// components
import Header from '../../components/header';

const Categories = () => {
  return (
    <View style={styles.root}>
      <Header />
      <Text>Categories</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    ...globalStyles.bgBody,
    ...globalStyles.f1,
  },
});

export default Categories;
