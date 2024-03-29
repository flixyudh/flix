import React from 'react';
import { ThemeContext } from '../Provider/ThemeProvider';

/**
 * @example
 * const { colors } = useTheme();
 * @returns {{
 * applyColors: function,
 * colors:import('../styles/colors').Colors,
 * applyFont:function,
 * fonts:{fontFamily:string},
 * isDark: boolean
 * }}
 */
const useTheme = () => {
  const store = React.useContext(ThemeContext);
  if (!store) {
    throw new Error('useTheme must be defined.');
  }

  return store;
};

export default useTheme;
