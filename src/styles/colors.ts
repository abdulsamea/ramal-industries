// Color system for Ramal Industries
export const colors = {
  // Primary brand colors
  primary: {
    main: '#34699A',
    light: '#4A7BAD',
    dark: '#2A5580',
    50: '#F0F4F8',
    100: '#D9E6F2',
    200: '#B3CCE5',
    300: '#8DB3D8',
    400: '#6799CB',
    500: '#34699A',
    600: '#2A5580',
    700: '#204166',
    800: '#162D4C',
    900: '#0C1932'
  },
  
  // Secondary colors
  secondary: {
    main: '#1089FF',
    light: '#3D9FFF',
    dark: '#0D6ECC',
    50: '#E6F3FF',
    100: '#CCE7FF',
    200: '#99CFFF',
    300: '#66B7FF',
    400: '#339FFF',
    500: '#1089FF',
    600: '#0D6ECC',
    700: '#0A5299',
    800: '#073766',
    900: '#041B33'
  },
  
  // Accent colors
  accent: {
    blue: '#1089FF',
    lightBlue: '#4A7BAD'
  },
  
  // Status colors
  success: {
    main: '#10B981',
    light: '#34D399',
    dark: '#059669',
    50: '#ECFDF5',
    100: '#D1FAE5',
    200: '#A7F3D0',
    300: '#6EE7B7',
    400: '#34D399',
    500: '#10B981',
    600: '#059669',
    700: '#047857',
    800: '#065F46',
    900: '#064E3B'
  },
  
  warning: {
    main: '#F59E0B',
    light: '#FCD34D',
    dark: '#D97706',
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F'
  },
  
  error: {
    main: '#EF4444',
    light: '#F87171',
    dark: '#DC2626',
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D'
  },
  
  // Neutral colors
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827'
  },
  
  // Common colors
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent'
};

// Utility function to get color with opacity
export const withOpacity = (color: string, opacity: number): string => {
  return `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
};

// CSS custom properties for use in Tailwind config
export const cssVariables = {
  '--color-primary': colors.primary.main,
  '--color-primary-light': colors.primary.light,
  '--color-primary-dark': colors.primary.dark,
  '--color-secondary': colors.secondary.main,
  '--color-secondary-light': colors.secondary.light,
  '--color-secondary-dark': colors.secondary.dark,
  '--color-accent-blue': colors.accent.blue,
  '--color-success': colors.success.main,
  '--color-warning': colors.warning.main,
  '--color-error': colors.error.main
};