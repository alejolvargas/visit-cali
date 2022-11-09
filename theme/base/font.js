// @flow
import { css } from 'styled-components'
import { isMobile, isTablet } from '../../constants/styles'

//fonts
export const bodyFont = '"Mark Book", sans-serif'

//heights
export const lineHeight = 1.5

//Weights
export const fontWeight = 400
export const fontWeightBold = 600

export const textSizes = {
  hxxxxl: {
    default: {
      fontSize: '48px',
      lineHeight: '54px',
      uppercase: true,
    },
    tablet: {
      fontSize: '40px',
      lineHeight: '46px',
      uppercase: true,
    },
    mobile: {
      fontSize: '28px',
      lineHeight: '34px',
      uppercase: true,
    },
  },
  hxxxl: {
    default: {
      fontSize: '48px',
      lineHeight: '54px',
      uppercase: true,
    },
    tablet: {
      fontSize: '40px',
      lineHeight: '46px',
      uppercase: true,
    },
    mobile: {
      fontSize: '28px',
      lineHeight: '34px',
      uppercase: true,
    },
  },
  hxxl: {
    default: {
      fontSize: '34px',
      lineHeight: '40px',
    },
    tablet: {
      fontSize: '32px',
      lineHeight: '38px',
    },
    mobile: {
      fontSize: '24px',
      lineHeight: '30px',
    },
  },
  hxl: {
    default: {
      fontSize: '30px',
      lineHeight: '36px',
    },
    tablet: {
      fontSize: '26px',
      lineHeight: '32px',
    },
    mobile: {
      fontSize: '22px',
      lineHeight: '28px',
    },
  },
  hl: {
    default: {
      fontSize: '24px',
      lineHeight: '30px',
    },
    tablet: {
      fontSize: '22px',
      lineHeight: '28px',
    },
    mobile: {
      fontSize: '20px',
      lineHeight: '26px',
    },
  },
  hm: {
    default: {
      fontSize: '20px',
      lineHeight: '26px',
    },
    tablet: {
      fontSize: '18px',
      lineHeight: '24px',
    },
    mobile: {
      fontSize: '18px',
      lineHeight: '24px',
    },
  },
  hs: {
    default: {
      fontSize: '18px',
      lineHeight: '24px',
    },
    tablet: {
      fontSize: '18px',
      lineHeight: '24px',
    },
    mobile: {
      fontSize: '16px',
      lineHeight: '22px',
    },
  },
  hxs: {
    default: {
      fontSize: '12px',
      lineHeight: '16px',
    },
    tablet: {
      fontSize: '12px',
      lineHeight: '16px',
    },
    mobile: {
      fontSize: '12px',
      lineHeight: '16px',
    },
  },
  txxl: {
    default: {
      fontSize: '20px',
      lineHeight: '26px',
    },
  },
  txl: {
    default: {
      fontSize: '18px',
      lineHeight: '24px',
    },
  },
  tl: {
    default: {
      fontSize: '16px',
      lineHeight: '22px',
    },
  },
  tm: {
    default: {
      fontSize: '14px',
      lineHeight: '20px',
    },
  },
  ts: {
    default: {
      fontSize: '12px',
      lineHeight: '16px',
    },
  },
}

const generateFontSize = value => {
  return css`
    font-size: ${value.fontSize};
    line-height: ${value.lineHeight};
    ${!!value.uppercase && `text-transform: uppercase`};
  `
}

const generateResponsiveFontSize = size => {
  const fontBaseCss = css`
    ${generateFontSize(size.default)};

    ${!!size.mobile &&
    css`
      @media ${isMobile} {
        ${generateFontSize(size.mobile)}
      }
    `};

    ${!!size.tablet &&
    css`
      @media ${isTablet} {
        ${generateFontSize(size.tablet)}
      }
    `};
  `

  return fontBaseCss
}

export const font = {
  hxxxl: generateResponsiveFontSize(textSizes.hxxxl),
  hxxl: generateResponsiveFontSize(textSizes.hxxl),
  hxl: generateResponsiveFontSize(textSizes.hxl),
  hl: generateResponsiveFontSize(textSizes.hl),
  hm: generateResponsiveFontSize(textSizes.hm),
  hs: generateResponsiveFontSize(textSizes.hs),
  hxs: generateResponsiveFontSize(textSizes.hxs),
  txxl: generateResponsiveFontSize(textSizes.txxl),
  txl: generateResponsiveFontSize(textSizes.txl),
  tl: generateResponsiveFontSize(textSizes.tl),
  tm: generateResponsiveFontSize(textSizes.tm),
  ts: generateResponsiveFontSize(textSizes.ts),
}
