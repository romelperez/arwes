/* eslint-env jest */

import lighten from 'polished/lib/color/lighten';
import darken from 'polished/lib/color/darken';

import { createTheme } from './createTheme';

test('Should create default palette tonalOffset of 0.1', () => {
  const theme = createTheme();
  expect(theme.palette.tonalOffset).toBe(0.1);
});

test('Should create default palette contrastThreshold of 0.45', () => {
  const theme = createTheme();
  expect(theme.palette.contrastOffset).toBe(0.45);
});

test('Should create default "primary" palette with "cyan" color', () => {
  const theme = createTheme();
  expect(theme.palette.primary).toEqual({
    main: '#0ff',
    dark1: '#0cc',
    dark2: '#099',
    dark3: '#066',
    light1: '#3ff',
    light2: '#6ff',
    light3: '#9ff'
  });
});

test('Should create default "secondary" palette with "yellow" color', () => {
  const theme = createTheme();
  expect(theme.palette.secondary).toEqual({
    main: '#ff0',
    dark1: '#cc0',
    dark2: '#990',
    dark3: '#660',
    light1: '#ff3',
    light2: '#ff6',
    light3: '#ff9'
  });
});

test('Should create default "success" palette with "green" color', () => {
  const theme = createTheme();
  expect(theme.palette.success).toEqual({
    main: '#0f0',
    dark: '#0c0',
    light: '#3f3',
    contrast: '#001900'
  });
});

test('Should create default "info" palette with "blue" color', () => {
  const theme = createTheme();
  expect(theme.palette.info).toEqual({
    main: '#00f',
    dark: '#00c',
    light: '#33f',
    contrast: '#e5e5ff'
  });
});

test('Should create default "warn" palette with "orange" color', () => {
  const theme = createTheme();
  expect(theme.palette.warn).toEqual({
    main: '#fa0',
    dark: '#c80',
    light: '#fb3',
    contrast: '#191100'
  });
});

test('Should create default "error" palette with "red" color', () => {
  const theme = createTheme();
  expect(theme.palette.error).toEqual({
    main: '#f00',
    dark: '#c00',
    light: '#f33',
    contrast: '#190000'
  });
});

describe('ray colors', () => {
  ['primary', 'secondary'].forEach(paletteName => {
    test(`Should create "${paletteName}" palette with provided main color and tonalOffset`, () => {
      const tonalOffset = 0.12;
      const color = '#9acd32';
      const theme: any = createTheme({
        palette: {
          tonalOffset,
          [paletteName]: { main: color }
        }
      });
      expect(theme.palette[paletteName]).toEqual({
        main: color,
        dark1: darken(tonalOffset, color),
        dark2: darken(tonalOffset * 2, color),
        dark3: darken(tonalOffset * 3, color),
        light1: lighten(tonalOffset, color),
        light2: lighten(tonalOffset * 2, color),
        light3: lighten(tonalOffset * 3, color)
      });
    });

    test(`Should create "${paletteName}" palette with all colors provided`, () => {
      const main = '#000';
      const dark1 = '#111';
      const dark2 = '#222';
      const dark3 = '#333';
      const light1 = '#444';
      const light2 = '#555';
      const light3 = '#666';
      const theme: any = createTheme({
        palette: {
          [paletteName]: { main, dark1, dark2, dark3, light1, light2, light3 }
        }
      });
      expect(theme.palette[paletteName]).toEqual(
        { main, dark1, dark2, dark3, light1, light2, light3 }
      );
    });
  });
});

describe('basic colors', () => {
  ['success', 'info', 'warn', 'error'].forEach(paletteName => {
    test(`Should create "${paletteName}" palette with provided light color, tonalOffset, contrastOffset`, () => {
      const tonalOffset = 0.15;
      const contrastOffset = 3;
      const color = '#3885f7'; // light color
      const theme: any = createTheme({
        palette: {
          tonalOffset,
          contrastOffset,
          [paletteName]: { main: color }
        }
      });
      expect(theme.palette[paletteName]).toEqual({
        main: color,
        dark: darken(tonalOffset, color),
        light: lighten(tonalOffset, color),
        contrast: darken(contrastOffset, color)
      });
    });

    test(`Should create "${paletteName}" palette with provided dark color, tonalOffset, contrastOffset`, () => {
      const tonalOffset = 0.225;
      const contrastOffset = 2.75;
      const color = '#102b54'; // dark color
      const theme: any = createTheme({
        palette: {
          tonalOffset,
          contrastOffset,
          [paletteName]: { main: color }
        }
      });
      expect(theme.palette[paletteName]).toEqual({
        main: color,
        dark: darken(tonalOffset, color),
        light: lighten(tonalOffset, color),
        contrast: lighten(contrastOffset, color)
      });
    });

    test(`Should create "${paletteName}" palette with all colors provided`, () => {
      const main = '#000';
      const dark = '#111';
      const light = '#222';
      const contrast = '#333';
      const theme: any = createTheme({
        palette: {
          [paletteName]: { main, dark, light, contrast }
        }
      });
      expect(theme.palette[paletteName]).toEqual({ main, dark, light, contrast });
    });
  });
});

test('Should create "neutral" palette with "black" color and elevation factor multiplier for elevation offset of 0.05', () => {
  const theme = createTheme();
  expect(theme.palette.neutral.elevate(0)).toBe('#000');
  expect(theme.palette.neutral.elevate(1)).toBe(lighten(0.025, '#000'));
  expect(theme.palette.neutral.elevate(2)).toBe(lighten(0.05, '#000'));
});

test('Should create "neutral" palette with provided dark color and elevation offset', () => {
  const elevationOffset = 0.05;
  const color = '#022'; // dark color
  const theme = createTheme({
    palette: {
      elevationOffset,
      neutral: { main: color }
    }
  });
  expect(theme.palette.neutral.elevate(0)).toBe(color);
  expect(theme.palette.neutral.elevate(1)).toBe(lighten(elevationOffset * 1, color));
  expect(theme.palette.neutral.elevate(2)).toBe(lighten(elevationOffset * 2, color));
});

test('Should create "neutral" palette with provided light color and elevation offset', () => {
  const elevationOffset = 0.04;
  const color = '#dff'; // light color
  const theme = createTheme({
    palette: {
      elevationOffset,
      neutral: { main: color }
    }
  });
  expect(theme.palette.neutral.elevate(0)).toBe(color);
  expect(theme.palette.neutral.elevate(1)).toBe(darken(elevationOffset * 1, color));
  expect(theme.palette.neutral.elevate(2)).toBe(darken(elevationOffset * 2, color));
});

test('Should allow to extend multiple themes', () => {
  const theme1 = createTheme({
    palette: {
      elevationOffset: 0.5,
      primary: { main: '#e94' },
      info: { main: '#af0' },
      neutral: { main: '#a0f' }
    }
  });
  const theme2 = createTheme({
    palette: {
      tonalOffset: 0.3,
      secondary: { main: '#770' },
      info: { main: '#f79' }
    }
  }, theme1);
  expect(theme2.palette).toMatchObject({
    tonalOffset: 0.3,
    elevationOffset: 0.5,
    primary: { main: '#e94' },
    secondary: { main: '#770' },
    info: { main: '#f79' },
    neutral: { main: '#a0f' }
  });
});

test('Should allow extra palette features', () => {
  const theme = createTheme({
    palette: {
      xxx: 0.5,
      yyy: {
        main: '#fff',
        disabled: '#ccc',
        focus: '#aaa'
      },
      zzz: {
        main: '#aff',
        hover: '#cee'
      }
    }
  });
  expect(theme.palette.xxx).toBe(0.5);
  expect(theme.palette.yyy).toEqual({
    main: '#fff',
    disabled: '#ccc',
    focus: '#aaa'
  });
  expect(theme.palette.zzz).toEqual({
    main: '#aff',
    hover: '#cee'
  });
});