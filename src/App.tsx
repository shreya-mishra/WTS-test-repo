import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from './constant/Colors';
import TankFrame from './components/TankFrame';
import {tanksArr} from './constant/TankConstants';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Water Tank Simulation</Text>
      <TankFrame allTankLevel={tanksArr} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
