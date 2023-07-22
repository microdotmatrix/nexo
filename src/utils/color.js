const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];
const themeColors = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'error', 'surface'];
const allColors = ['white', 'black', 'primary', 'secondary', 'tertiary', 'success', 'warning', 'error', 'surface'];
const themeColorsJ = themeColors.join('|');
const allColorsJ = allColors.join('|');
const shadesJ = shades.join('|');

export const colors = {
  primary: Object.fromEntries(shades.map(x => [x, `rgba(var(--color-primary-${x}), %alpha)`])),
  secondary: Object.fromEntries(shades.map(x => [x, `rgba(var(--color-secondary-${x}), %alpha)`])),
  tertiary: Object.fromEntries(shades.map(x => [x, `rgba(var(--color-tertiary-${x}), %alpha)`])),
  success: Object.fromEntries(shades.map(x => [x, `rgba(var(--color-success-${x}), %alpha)`])),
  warning: Object.fromEntries(shades.map(x => [x, `rgba(var(--color-warning-${x}), %alpha)`])),
  error: Object.fromEntries(shades.map(x => [x, `rgba(var(--color-error-${x}), %alpha)`])),
  surface: Object.fromEntries(shades.map(x => [x, `rgba(var(--color-surface-${x}), %alpha)`]))
}