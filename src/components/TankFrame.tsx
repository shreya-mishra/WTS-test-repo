import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Tank from './Tank';

const TankFrame = ({
  quantity,
  index,
  testID,
}: {
  quantity: number;
  index: number;
  testID: string;
}) => {
  return (
    <View style={styles.container} testID={testID}>
      <Tank quantity={quantity} />

      <Text testID={`tank-text ${index}`} style={styles.tank}>
        Tank {index + 1}
      </Text>
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
  tank: {
    textAlign: 'center',
    marginTop: 8,
    fontWeight: 'bold',
    color: 'orange',
  },
});
