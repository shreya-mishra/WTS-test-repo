import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from './constant/Colors';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Water Tank Simulation</Text>
      {/* <TankFrame quantity/> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.color_background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.color_water,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});
