import { MyAwesomeTheme, ColorAwesomeTheme } from 'styled-components';
import { themeConfig } from '../constant/theme';

export type IThemeColorProps = keyof MyAwesomeTheme['colors'];

export const getColorPalette = (curColor: IThemeColorProps, advanceCurColor: keyof ColorAwesomeTheme = 'main') => {
  return themeConfig['colors'][curColor][advanceCurColor];
};
