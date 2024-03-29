const PALETTE = {
  BLACK: '#000000',
  BLACK_50: '#1B1B1B',
  WHITE: '#FFFFFF',
  GRAY_400: '#F0F2F5',
  GRAY_600: '#D6D8DC',
  GRAY_900: '#8F9092',
  RED_400: '#FB5348',
  RED_600: '#E23A2F',
  GREEN_400: '#3DF771',
  GREEN_600: '#23DD57',
  YELLOW_400: '#F5B95A',
  YELLOW_600: '#DC9F41',
  BLUE_500: '#009BE3',
  TRANSPARENT: 'rgba(0,0,0,0)',
}

export const COLOR = {
  TRANSPARENT: PALETTE.TRANSPARENT,
  BLACK: PALETTE.BLACK,
  WHITE: PALETTE.WHITE,
  TYPE: {
    WARNING: PALETTE.YELLOW_600,
    DANGER: PALETTE.RED_600
  },
  TEXT: {
    PRIMARY: PALETTE.BLACK_50,
    LABEL: PALETTE.GRAY_900
  },
  BUTTON: {
    PRIMARY: PALETTE.BLUE_500,
    SECONDARY: PALETTE.WHITE
  }
}