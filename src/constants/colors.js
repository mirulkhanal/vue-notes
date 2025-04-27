/**
 * Application color palette
 * These colors are used throughout the application for note backgrounds
 * and UI elements
 */

export const NOTE_COLORS = {
  YELLOW: '#fdffb6',
  GREEN: '#caffbf',
  BLUE: '#9bf6ff',
  PURPLE: '#a0c4ff',
  PINK: '#ffc6ff',
  ORANGE: '#ffadad',
  TEAL: '#bdb2ff',
  LIME: '#d0f4de',
  CORAL: '#ffd6a5',
  LAVENDER: '#e4c1f9',
};

// UI colors
export const UI_COLORS = {
  PRIMARY: '#4a90e2',
  PRIMARY_DARK: '#3a7bc8',
  DANGER: '#ff6b6b',
  DANGER_DARK: '#e63946',
  BACKGROUND: '#f5f5f5',
  TEXT_PRIMARY: '#333',
  TEXT_SECONDARY: '#555',
  TEXT_MUTED: '#888',
};

// Default color for new notes
export const DEFAULT_NOTE_COLOR = NOTE_COLORS.YELLOW;

// Get all note colors as an array (for color picker)
export const getAllNoteColors = () => Object.values(NOTE_COLORS);
