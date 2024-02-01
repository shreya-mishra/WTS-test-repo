import {render, waitFor} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import Tank from '../src/components/Tank';
import {COLORS} from '../src/constant/Colors';

describe('Tank component', () => {
  it('applies styles and renders text correctly', () => {
    const {getByTestId} = render(<Tank level={800} />);

    const tankContainer = getByTestId('tank-container');
    const tankText = getByTestId('tank-text');

    // Check styles
    expect(tankContainer).toHaveStyle({
      height: 100,
      width: 150,
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
    });

    expect(tankText).toHaveStyle({
      color: COLORS.color_background,
    });

    // Check text content
    expect(tankText).toHaveTextContent('800.0Ltr');
  });
  it('applies animation and renders text correctly', async () => {
    const {getByTestId} = render(<Tank level={800} />);

    const tankContainer = getByTestId('tank-container');
    const tankText = getByTestId('tank-text');

    // Use waitFor to wait for the animation to complete
    await waitFor(() => {
      expect(tankContainer).toHaveStyle({
        height: 100, // Assuming level * 0.99
      });
    });

    // Check text content
    expect(tankText).toHaveTextContent('800.0Ltr');
  });
});
