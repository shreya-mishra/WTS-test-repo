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

const Tank = ({level}: {level: number}) => {
  const [tankLevelHeight] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(tankLevelHeight, {
      toValue: level * 0.99,
      duration: 500, // Adjust the duration as needed
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [level]);

  return (
    <View testID="tank-container" style={styles.tank}>
      <Animated.View style={[styles.tankLevel, {height: tankLevelHeight}]} />

      <View style={styles.text}>
        <Text
          testID="tank-text"
          style={{
            color: level > 700 ? COLORS.color_background : COLORS.color_100,
          }}>
          {level.toFixed(1)}Ltr
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
  tankLevel: {
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
