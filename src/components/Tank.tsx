import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../constant/Colors';
const {width} = Dimensions.get('screen');

const Tank = ({quantity}: {quantity: number}) => {
  const [tankquantityHeight] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(tankquantityHeight, {
      toValue: quantity * 0.99,
      duration: 500, // Adjust the duration as needed
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [quantity]);

  return (
    <View testID="tank-container" style={styles.tank}>
      <Animated.View
        style={[styles.tankquantity, {height: tankquantityHeight}]}
      />

      <View style={styles.text}>
        <Text
          testID="tank-text"
          style={{
            color: quantity > 700 ? COLORS.color_background : COLORS.color_100,
          }}>
          {quantity.toFixed(1)}Ltr
        </Text>
      </View>
    </View>
  );
};

export default Tank;

const styles = StyleSheet.create({
  tank: {
    height: 100,
    width: width / 5,
    borderWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 8,
    borderColor: 'grey',
    display: 'flex',
    alignItems: 'flex-start',
    overflow: 'hidden',
    position: 'relative',
    margin: 10,
    transform: [{rotate: '180deg'}],
  },
  tankquantity: {
    position: 'relative',
    bottom: 0,
    width: '100%',
    backgroundColor: COLORS.color_water,
    borderWidth: 1,
    borderColor: COLORS.color_background,
    borderRadius: 8,
  },
  text: {
    position: 'absolute',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    width: width / 5,
    transform: [{rotate: '180deg'}],
  },
});
