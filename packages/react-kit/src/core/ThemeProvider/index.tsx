import { PropsWithChildren } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

import defaultTheme from '../../theme';

type Theme = { [key in string]: any };

type Props = { theme?: Theme };

const ThemeProvider = ({ theme: propTheme, ...props }: PropsWithChildren<Props>) => {
  const theme = propTheme ?? defaultTheme;

  return <StyledComponentsThemeProvider theme={theme} {...props} />;
};

export default ThemeProvider;
