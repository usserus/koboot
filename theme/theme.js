import { createTheme } from '@rneui/themed';

const theme = createTheme({
  lightColors: {
    primary: '#0E5151',
    secondary: '#E6E6E6',
    background: '#FFFFFF',
  },
  darkColors: {
    primary: '#000',
  },
  mode: 'light',
  components: {
    ButtonGroup: {
      containerStyle: {
        backgroundColor: '#E6E6E6',
        borderRadius: 14,
        height: 28,
      },
      innerBorderStyle: {
        color: '#E6E6E6',
      },
      buttonContainerStyle: {
      },
      selectedButtonStyle: {
        backgroundColor: '#0E5151',
        borderRadius: 14,
      },
      textStyle: {
        color: '#0E5151',
        fontSize: 12,
        fontFamily: 'FireSans-Regular',
      },
      titleStyle: {
        color: 'white'
      }
    },
    Button: {
      buttonStyle: {
        backgroundColor: '#0E5151',
        borderRadius: 40,
        paddingVertical: 7,
        paddingHorizontal: 10
      },
      titleStyle: { color: 'white'}
    }
  },
});


export default theme;