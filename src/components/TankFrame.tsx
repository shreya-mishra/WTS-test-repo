import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Tank from './Tank';

const {width} = Dimensions.get('screen');

const TankFrame = ({level}: {level: number}) => {
  return (
    <View style={styles.container}>
      {/* <Tank level={level} /> */}
      <Text style={styles.basket}>Tank {1}</Text>
    </View>
  );
};

export default TankFrame;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: width / 5,
    alignItems: 'center',
    margin: 20,
  },
  basket: {
    textAlign: 'center',
    marginTop: 8,
    fontWeight: 'bold',
    color: 'orange',
  },
});
