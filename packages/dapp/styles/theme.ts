import chakraTheme, { ColorHues, Theme } from '@chakra-ui/theme';
import { css } from '@emotion/react';

export const theme: Theme & {
  colors: Theme['colors'] & {
    greyText: string;
    mud: ColorHues;
  };
  fonts: Theme['fonts'] & {
    grotesk: string;
  };
} = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body: `'Inter', sans-serif`,
    mono: `'Space Mono', monospace`,
    grotesk: `'Space Grotesk', sans-serif`,
  },
  colors: {
    ...chakraTheme.colors,
    greyText: '#A2A2A2',
    mud: {
      50: '#ffedee',
      100: '#e2d4d4',
      200: '#c8b9b9',
      300: '#ae9e9f',
      400: '#968384',
      500: '#7c696a',
      600: '#625253',
      700: '#47393b',
      800: '#2d2222',
      900: '#180808',
    },
  },
};

export const globalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    box-shadow: none;
  }
`;
