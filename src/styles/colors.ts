// Color system for Ramal Industries
export const colors = {
  // Primary brand colors
  primary: {
    main: "#06923E",
    light: "#22A555",
    dark: "#047D32",
    50: "#F0FDF4",
    100: "#DCFCE7",
    200: "#BBF7D0",
    300: "#86EFAC",
    400: "#4ADE80",
    500: "#06923E",
    600: "#047D32",
    700: "#15803D",
    800: "#166534",
    900: "#14532D",
  },

  // Secondary colors
  secondary: {
    main: "#B0A695",
    50: "#FFFFFF",
    100: "#FFFFEE",
    200: "#F6E8D1",
    300: "#B0A695",
    400: "#968D7F",
    500: "#7B7468",
    600: "#615B52",
    700: "#6B6754",
    800: "#4B4735",
    900: "#2C2A1A",
  },

  // Accent colors
  accent: {
    blue: "#0EA5E9",
    orange: "#F97316",
    purple: "#8B5CF6",
  },

  // Status colors
  success: {
    main: "#10B981",
    light: "#34D399",
    dark: "#059669",
    50: "#ECFDF5",
    100: "#D1FAE5",
    200: "#A7F3D0",
    300: "#6EE7B7",
    400: "#34D399",
    500: "#10B981",
    600: "#059669",
    700: "#047857",
    800: "#065F46",
    900: "#064E3B",
  },

  warning: {
    main: "#F59E0B",
    light: "#FCD34D",
    dark: "#D97706",
    50: "#FFFBEB",
    100: "#FEF3C7",
    200: "#FDE68A",
    300: "#FCD34D",
    400: "#FBBF24",
    500: "#F59E0B",
    600: "#D97706",
    700: "#B45309",
    800: "#92400E",
    900: "#78350F",
  },

  error: {
    main: "#EF4444",
    light: "#F87171",
    dark: "#DC2626",
    50: "#FEF2F2",
    100: "#FEE2E2",
    200: "#FECACA",
    300: "#FCA5A5",
    400: "#F87171",
    500: "#EF4444",
    600: "#DC2626",
    700: "#B91C1C",
    800: "#991B1B",
    900: "#7F1D1D",
  },

  // Neutral colors
  gray: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },

  // Common colors
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
};

// Utility function to get color with opacity
export const withOpacity = (color: string, opacity: number): string => {
  return `${color}${Math.round(opacity * 255)
    .toString(16)
    .padStart(2, "0")}`;
};

// CSS custom properties for use in Tailwind config
export const cssVariables = {
  "--color-primary": colors.primary.main,
  "--color-primary-light": colors.primary.light,
  "--color-primary-dark": colors.primary.dark,
  "--color-secondary": colors.secondary.main,
  "--color-secondary-light": colors.secondary.main,
  "--color-secondary-dark": colors.secondary.main,
  "--color-accent-blue": colors.accent.blue,
  "--color-success": colors.success.main,
  "--color-warning": colors.warning.main,
  "--color-error": colors.error.main,
};
