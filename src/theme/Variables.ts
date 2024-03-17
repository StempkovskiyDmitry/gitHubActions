import { Dimensions, Platform, StyleSheet } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const IS_IOS = Platform.OS === 'ios';

export const Colors = {
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  black: '#393939',
  opacityBlack: '#00000033',
  mainBlue: '#1E3D65',
  plate: '#F5F5F8',
  mainOrange: '#FF5500',
  forStroke: '#E7E7F0',
  mediumGrey: '#D4D4D4',
  greyForTextAndButton: '#8F8F8F',
  darkPlate: '#DDE2E8',
  darkGray: '#C8C8C8',
  gray: '#E8E8E8',
  green: '#00A154',
  lightOrange: '#FF6E26',
  strokeCard: '#F1F1F1',
  error: '#B21628',
  lightBlue: '#324E73',
};

export const shadow = StyleSheet.create({
  style: {
    elevation: 3,
    shadowColor: Colors.black,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
}).style;
