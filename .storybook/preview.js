import globalStyle from '../src/core/globalStyle';
import { themeConfig } from '../src/constant/theme';

globalStyle;
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: themeConfig.colors.dark.main,
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
