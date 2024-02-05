import {render} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect'; // Import the extended expect
import TankFrame from '../src/components/TankFrame';

describe('TankFrame component', () => {
  it('applies styles correctly', () => {
    const {getByTestId} = render(
      <TankFrame quantity={50} index={0} testID="tank-frame 0" />,
    );

    const tankFrame = getByTestId('tank-frame 0');

    expect(tankFrame).toHaveStyle({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 10,
    });

    const basketText = getByTestId('basket-text 0');
    expect(basketText).toHaveStyle({
      textAlign: 'center',
      marginTop: 8,
      fontWeight: 'bold',
      color: 'orange',
    });
  });
});
