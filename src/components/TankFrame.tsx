import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Tank from './Tank';

const TankFrame = ({level, index}: {level: number; index: number}) => {
  return (
    <View style={styles.container}>
      <Tank level={level} />

      <Text style={styles.basket}>Tank {index + 1}</Text>
    </View>
  );
};

export default TankFrame;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  basket: {
    textAlign: 'center',
    marginTop: 8,
    fontWeight: 'bold',
    color: 'orange',
  },
});
