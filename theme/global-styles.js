import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-family: ${({ theme }) => theme?.bodyFont};
  }
  

  html, body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme?.bodyFont};
    color: ${({ theme }) => theme?.colors?.text};
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  button {
    font-size: 1rem;
  }

  .responsive-table {
    overflow-x: auto;
  }

  .text-align-center {
    text-align: center;
  }

  .text-align-right {
    text-align: right;
  }

  .glide__slide {
    width: 100%;
    flex-shrink: 0;

    white-space: normal;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    a {
      user-select: none;
    }
  }

  ::placeholder { 
    color: ${({ theme }) => theme?.colors?.brandE};
    opacity: 1;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  input[type=number] {
    appearance: textfield;
  }

  strong {
    font-weight: 600;
  }

  ol {
    margin: 0;
    counter-reset: li;

    li {
      counter-increment: li;
    }

  }

`
