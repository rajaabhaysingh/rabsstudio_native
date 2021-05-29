import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {ParallaxImage} from 'react-native-snap-carousel';
import styles from '../../styles/SliderEntry.style';

export default class SliderEntry extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object,
  };

  get image() {
    const {
      data: {illustration},
      parallax,
      parallaxProps,
    } = this.props;

    return parallax ? (
      <ParallaxImage
        source={{uri: illustration}}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.35}
        showSpinner={true}
        spinnerColor={'rgba(0, 0, 0, 0.25)'}
        {...parallaxProps}
      />
    ) : (
      <Image source={{uri: illustration}} style={styles.image} />
    );
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.slideInnerContainer}
        onPress={() => {
          alert(`You've clicked`);
        }}>
        <View style={styles.imageContainer}>{this.image}</View>
      </TouchableOpacity>
    );
  }
}
