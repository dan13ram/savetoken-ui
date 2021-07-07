import chakraTheme, { ColorHues, Theme } from '@chakra-ui/theme';
import { css } from '@emotion/react';

export const theme: Theme & {
  colors: Theme['colors'] & {
    grey1: string;
    grey2: string;
    grey4: string;
    grey5: string;
    grey6: string;
    darkPurple: ColorHues;
    lightGreen: ColorHues;
    darkGreen: ColorHues;
    lightBlue: ColorHues;
    darkBlue: ColorHues;
    darkPink: ColorHues;
    greyGradient: string;
    yellowPinkGradient: string;
    yellowGreenGradient: string;
    greenBlueGradient: string;
    pinkBlueGradient: string;
    greenBlueGradientDark: string;
    pinkBlueGradientDark: string;
    greenGradient: string;
    blueGradient: string;
  };
  fontSizes: Theme['fontSizes'] & {
    ['2xs']: string;
    ['3xs']: string;
    ['4xs']: string;
  };
  fonts: Theme['fonts'] & {
    grotesk: string;
  };
  breakpoints: Theme['breakpoints'] & {
    xs: string;
  };
} = {
  ...chakraTheme,
  breakpoints: {
    ...chakraTheme.breakpoints,
    xs: '24rem',
  },
  fontSizes: {
    ...chakraTheme.fontSizes,
    '2xs': '0.625rem',
    '3xs': '0.575rem',
    '4xs': '0.5rem',
  },
  fonts: {
    ...chakraTheme.fonts,
    body: `'Helvetica', 'Inter', sans-serif`,
    mono: `'Space Mono', monospace`,
    grotesk: `'Space Grotesk', sans-serif`,
  },
  colors: {
    ...chakraTheme.colors,
    grey1: '#4F4F4F',
    grey2: '#A2A2A2',
    grey4: '#BDBDBD',
    grey5: '#D6D6D6',
    grey6: '#F2F2F2',
    greyGradient: 'linear-gradient(135deg, #FFFFFF 0%, #CCCCCC 100%)',
    yellowPinkGradient: 'linear-gradient(135deg, #FFD245 0%, #B6509E 100%)',
    yellowGreenGradient: 'linear-gradient(135deg, #FFD245 0%, #00D395 100%)',
    greenBlueGradient: 'linear-gradient(135deg, #2775CA 0%, #00D395 100%)',
    pinkBlueGradient: 'linear-gradient(135deg, #2775CA 0%, #B6509E 100%)',
    greenBlueGradientDark: 'linear-gradient(135deg, #454A75 0%, #4EC3A0 100%)',
    pinkBlueGradientDark: 'linear-gradient(135deg, #FF007A 0%, #697AFF 100%)',
    greenGradient: 'linear-gradient(135deg, #00D395 0%, #4EC3A0 100%)',
    blueGradient: 'linear-gradient(135deg, #006AE3 0%, #697AFF 100%)',
    yellow: {
      50: '#fff9db',
      100: '#ffecaf',
      200: '#ffe07f',
      300: '#ffd44d',
      400: '#ffc71e',
      500: '#e6ae06',
      600: '#b38700',
      700: '#806100',
      800: '#4e3a00',
      900: '#1d1300',
    },
    pink: {
      50: '#ffeafb',
      100: '#ecc7e4',
      200: '#dba4ce',
      300: '#cb80ba',
      400: '#bb5da5',
      500: '#a2448c',
      600: '#7f346d',
      700: '#5b254f',
      800: '#381531',
      900: '#180415',
    },
    green: {
      50: '#d8fff7',
      100: '#acffe8',
      200: '#7bffda',
      300: '#49ffcb',
      400: '#1affbc',
      500: '#00e6a2',
      600: '#00b37e',
      700: '#008059',
      800: '#004e35',
      900: '#001c10',
    },
    blue: {
      50: '#e2f3ff',
      100: '#bad9f8',
      200: '#91bded',
      300: '#67a3e3',
      400: '#3f89da',
      500: '#256fc0',
      600: '#1a5797',
      700: '#0f3e6d',
      800: '#032544',
      900: '#000d1c',
    },
    darkPurple: {
      50: '#edf0ff',
      100: '#ced1e7',
      200: '#afb2d1',
      300: '#8f94bd',
      400: '#6f75a9',
      500: '#555b8f',
      600: '#424770',
      700: '#2f3351',
      800: '#1b1e33',
      900: '#070917',
    },
    darkGreen: {
      50: '#e0fcf4',
      100: '#c0eedf',
      200: '#9de0cc',
      300: '#78d2b7',
      400: '#54c5a3',
      500: '#3aab8a',
      600: '#2a856b',
      700: '#1b5f4c',
      800: '#093a2d',
      900: '#00160d',
    },
    darkPink: {
      50: '#ffe1f5',
      100: '#ffb1d8',
      200: '#ff7ebc',
      300: '#ff4ca2',
      400: '#ff1a87',
      500: '#e6006e',
      600: '#b40055',
      700: '#82003d',
      800: '#500025',
      900: '#20000e',
    },
    darkBlue: {
      50: '#e3e8ff',
      100: '#b2bbff',
      200: '#808eff',
      300: '#4e61fe',
      400: '#2035fd',
      500: '#0a1be4',
      600: '#0414b2',
      700: '#000e80',
      800: '#00094f',
      900: '#00021f',
    },
    lightGreen: {
      50: '#d8fff7',
      100: '#acffe8',
      200: '#7bffda',
      300: '#49ffcb',
      400: '#1affbc',
      500: '#00e6a2',
      600: '#00b37e',
      700: '#008059',
      800: '#004e35',
      900: '#001c10',
    },
    lightBlue: {
      50: '#ddf2ff',
      100: '#aed6ff',
      200: '#7dbbff',
      300: '#4aa0ff',
      400: '#1a85ff',
      500: '#006be6',
      600: '#0053b4',
      700: '#003c82',
      800: '#002451',
      900: '#000d21',
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
    outline: none;
  }
  :focus-visible {
    outline: rgba(66, 153, 225, 0.6) auto 1px;
  }
`;
