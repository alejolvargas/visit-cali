// @flow
import * as React from 'react'
import { ThemeProvider as StyledProvider } from 'styled-components'
import { GlobalStyle } from './global-styles'

const getTheme = theme => {
  if (theme === 'dark') return dark
  return base
}

const ThemeProvider = ({ children, theme = 'light' }) => {
  const baseTheme = getTheme(theme)

  return (
    <StyledProvider theme={baseTheme}>
      <GlobalStyle />
      {children}
    </StyledProvider>
  )
}

export { ThemeProvider }
