import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../src/App';
import {arr} from '../src/constant/TankConstants';
import {COLORS} from '../src/constant/Colors';
import '@testing-library/jest-native/extend-expect';

test('renders correctly', () => {
  const {getByText, getByTestId} = render(<App />);
  const linkElement = getByText(/Water Tank Simulation/i);
  expect(linkElement).toBeTruthy();
  // check if each tank is rendered
  for (let i = 0; i < arr.length - 1; i++) {
    const tankFrame = getByTestId(`tank-frame ${i}`);

    expect(tankFrame).toBeDefined();
  }
});
test('applies styles correctly', () => {
  const {getByTestId} = render(<App />);

  const container = getByTestId('container');
  expect(container).toHaveStyle({backgroundColor: COLORS.color_background});

  const title = getByTestId('title');
  expect(title).toHaveStyle({
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.color_water,
    marginTop: 10,
    marginBottom: 20,
  });
});
