import 'styled-components';

declare module 'styled-components' {
  export type AvailableColorTheme = 'primary' | 'secondary' | 'dark' | 'white' | 'success';
  export interface MyAwesomeTheme {
    colors: {
      [v in AvailableColorTheme]: ColorAwesomeTheme;
    };
  }

  export interface ColorAwesomeTheme {
    main: string;
    light?: string;
    dark?: string;
  }
}
