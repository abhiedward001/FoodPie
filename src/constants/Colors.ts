const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};


const palette = {
  neutral100: '#FFFFFF',
  neutral200: '#edfbfc',
  neutral300: '#D7CEC9',
  neutral400: '#B6ACA6',
  neutral500: '#978F8A',
  neutral600: '#564E4A',
  neutral700: '#3C3836',
  neutral800: '#191015',
  neutral900: '#000000',

  primary100: '#344c7c',
  primary200: '#1a356b',
  primary300: '#011f5b',
  primary400: '#011c52',
  primary500: '#011949',

  secondary100: '#73ffae',
  secondary200: '#45ff93',
  secondary300: '#16ff78',
  secondary400: '#12cc60',
  secondary500: '#0d9948',

  accent100: '#FFEED4',
  accent200: '#FFE1B2',
  accent300: '#FDD495',
  accent400: '#FBC878',
  accent500: '#FFBB50',

  angry100: '#F2D6CD',
  angry500: '#C03403',

  overlay20: 'rgba(25, 16, 21, 0.2)',
  overlay50: 'rgba(25, 16, 21, 0.5)',

  black100: '#E0E0E0',
  black200: '#A0A0A0',
  black300: '#5C5C5C',
  black400: '#2E2E2E',
  black500: '#0A0A0A',
  black: '#000000',

  white100: '#FFFFFF',
  white200: '#F2F2F2',
  white300: '#E6E6E6',
  white400: '#D9D9D9',
  white500: '#CCCCCC',

  grey100: '#F5F5F5',
  grey200: '#c4c4c4',
  grey300: '#acacac',
  grey400: '#626262',
  grey500: '#313131',
  grey600: '#6E6E6E',

  searchBar: '#EFF5FF',
  chatPress: '#C9C9C9',
  filterBorder: '#D1DCEE',

  success100: '#E6F9E6',
  success200: '#B3F0B3',
  success300: '#80E680',
  success400: '#4DDB4D',
  success500: '#1AD11A',
  success600: '#2A7948',

  warning100: '#FFF3CC',
  warning200: '#FFE699',
  warning300: '#FFD966',
  warning400: '#FFCC33',
  warning500: '#FFBF00',
  warning600: '#ca8a04',

  info100: '#CCF2FF',
  info200: '#99E6FF',
  info300: '#66D9FF',
  info400: '#33CCFF',
  info500: '#00BFFF',
  info600: '#0284c7',

  danger100: '#FFCCCC',
  danger200: '#FF9999',
  danger300: '#FF6666',
  danger400: '#FF3333',
  danger500: '#FF0000',
  danger600: '#DC2626',

  gradient100: '#48D6E0',
  gradient200: '#3CE0C6',
  gradient300: '#2AEEA2',

  golden: '#FFD700',
  pink: '#FD25E1',
  hyperLink: 'blue',
  orange: 'orange',
  dim_white: '#e1f8fb',
  light_blue: '#ebfdff',
  screenBackground: '#D1FFE5',
  star_yellow_color: '#FFC107',
  feedbackBackground: '#D0F0C0',
  logoLoginBackground: '#f1f7f4',
  primary_gradient: ['#48D6E0', '#3CE0C6', '#2AEEA2'],

  backgroundLightSuccess: '#EDFCF2',
  successBorder: '#66B584',
  successText: '#2A7948',
} as const;

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,

  /**
   * A helper for making something see-thru.
   */
  transparent: 'rgba(0, 0, 0, 0)',

  /**
   * primary color
   */
  primary: palette.primary300,

  /**
   * The default text color in many components.
   */
  text: palette.neutral800,

  /**
   * icon fill text
   */
  iconFill: palette.primary300,

  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,

  /**
   * The default color of the screen background.
   */
  background: palette.screenBackground,

  /**
   * The default border color.
   */
  border: palette.primary100,

  /**
   * The main tinting color.
   */
  tint: palette.primary500,

  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,

  /**
   * Sucess color
   */
  success: palette.success500,

  /**
   * Error messages.
   */
  error: palette.angry500,

  /**
   * Error Background color.
   */
  errorBackground: palette.angry100,

  /**
   * Star yellow color for progress bar / can be used other places as well for stars
   */
  star_yellow_color: palette.star_yellow_color,

  /**
   * Light blue color for components like background etc
   */
  light_blue: palette.light_blue,

  /**
   * Default colors for activity rings
   */
  defaultColors: [palette.gradient300, palette.gradient200, palette.warning300, palette.danger300],

  /**
   * Secondary default colors for activity rings (for gradients)
   */
  secondaryDefaultColors: [palette.gradient100, palette.primary300, palette.orange, palette.pink],
};

