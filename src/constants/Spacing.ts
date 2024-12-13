/**
  Use these spacings for margins/paddings and other whitespace throughout your app.
 */
export const spacing = {
  xxxs: 2,
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
  xxxxl: 72,
  header_height: 50,
  header_section_height: 144,
  header_section_empty_height: 75,
  elevation_low: 2,
  elevation_medium: 4,
  elevation_high: 10,
} as const;

export type Spacing = keyof typeof spacing;
