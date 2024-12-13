import { TextStyle } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  Inter_100Thin,
  Inter_700Bold,
  Inter_300Light,
  Inter_500Medium,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_800ExtraBold,
  Inter_200ExtraLight,
} from '@expo-google-fonts/inter';

export const customFonts = {
  Inter_100Thin,
  Inter_700Bold,
  Inter_300Light,
  Inter_500Medium,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_800ExtraBold,
  Inter_200ExtraLight,
};

export const fonts = {
  interFont: {
    thin: 'Inter_100Thin',
    bold: 'Inter_700Bold',
    light: 'Inter_300Light',
    medium: 'Inter_500Medium',
    normal: 'Inter_400Regular',
    semiBold: 'Inter_600SemiBold',
    extraBold: 'Inter_800ExtraBold',
    extraLight: 'Inter_200ExtraLight',
  },
};

// Base font size and line height
const BASE_FONT_SIZE = 16;
const BASE_LINE_HEIGHT = 24;

// Function to scale font size and line height proportionately
const scaleFontSize = (size: number) => RFValue((size / BASE_FONT_SIZE) * 14);
const scaleLineHeight = (lineHeight: number) => RFValue((lineHeight / BASE_LINE_HEIGHT) * 20);

export const fontSizes: Record<string, TextStyle> = {
  '6xl': { fontSize: scaleFontSize(64), lineHeight: scaleLineHeight(72) },
  '5xl': { fontSize: scaleFontSize(48), lineHeight: scaleLineHeight(56) },
  '4xl': { fontSize: scaleFontSize(40), lineHeight: scaleLineHeight(48) },
  xxxl: { fontSize: scaleFontSize(32), lineHeight: scaleLineHeight(40) },
  xxl: { fontSize: scaleFontSize(24), lineHeight: scaleLineHeight(32) },
  xl: { fontSize: scaleFontSize(20), lineHeight: scaleLineHeight(28) },
  lg: { fontSize: scaleFontSize(18), lineHeight: scaleLineHeight(24) },
  md: { fontSize: scaleFontSize(16), lineHeight: scaleLineHeight(20) },
  sm: { fontSize: scaleFontSize(14), lineHeight: scaleLineHeight(16) },
  xs: { fontSize: scaleFontSize(12), lineHeight: scaleLineHeight(14) },
  xxs: { fontSize: scaleFontSize(10), lineHeight: scaleLineHeight(12) },
};

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts: fonts,

  /**
   * The sizes are available to use, but prefer using the semantic name.
   */
  size: fontSizes,

  /**
   * The primary font. Used in most places.
   */
  primary: fonts.interFont,

  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: fonts.interFont,
};
