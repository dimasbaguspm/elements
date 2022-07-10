import { IThemeColorProps } from '../../../utils/color';

interface TypographyProps {
  boldText?: boolean;
  colorText: IThemeColorProps;
  children: string;
}

export type { TypographyProps };
