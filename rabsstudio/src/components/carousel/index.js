import React, {useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';

// styles
// import globalStyles from '../../styles/GlobalStyles';
import {sliderWidth, itemWidth} from '../../styles/SliderEntry.style';
import {COLORS} from '../../constants';

// components
import SliderEntry from './SliderEntry';

const CarouselComp = () => {
  const sliderRef = useRef();

  const [currentSlide, setCurrentSlide] = useState(1);

  const ENTRIES1 = [
    {
      illustration: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
      illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
      illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    },
    {
      illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    },
    {
      illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    },
    {
      illustration: 'https://i.imgur.com/lceHsT6l.jpg',
    },
  ];

  const _renderItemWithParallax = ({item, index}, parallaxProps) => {
    return (
      <SliderEntry data={item} parallax={true} parallaxProps={parallaxProps} />
    );
  };

  return (
    <View style={styles.exampleContainer}>
      <Carousel
        ref={sliderRef}
        data={ENTRIES1}
        renderItem={_renderItemWithParallax}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        hasParallaxImages={true}
        firstItem={currentSlide}
        inactiveSlideScale={0.96}
        inactiveSlideOpacity={0.7}
        // inactiveSlideShift={20}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContentContainer}
        loop={true}
        loopClonesPerSide={2}
        autoplay={true}
        autoplayDelay={1000}
        autoplayInterval={3000}
        onSnapToItem={index => setCurrentSlide(index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.paper_dark,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  scrollview: {
    flex: 1,
  },
  exampleContainer: {
    // paddingVertical: 30,
  },
  exampleContainerDark: {
    backgroundColor: COLORS.black,
  },
  exampleContainerLight: {
    backgroundColor: 'white',
  },
  title: {
    paddingHorizontal: 30,
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleDark: {
    color: COLORS.black,
  },
  subtitle: {
    marginTop: 5,
    paddingHorizontal: 30,
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 13,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  slider: {
    // marginTop: 15,
    overflow: 'visible', // for custom animations
  },
  sliderContentContainer: {
    // paddingVertical: 10, // for custom animation
  },
  paginationContainer: {
    paddingVertical: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
  },
});

export default CarouselComp;
