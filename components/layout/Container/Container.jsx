import React, { useContext } from 'react'
import { ContainerStyled } from './Container.styled'

export const Container = ({
  id,
  fullWidth = false,
  padding,
  variant = 'default',
  styles,
  children,
}) => {
  const getPadding = () => {
    if (padding) return padding
    return 's'
  }

  return (
    <ContainerStyled
      id={id}
      fullWidth={fullWidth}
      padding={getPadding()}
      variant={variant}
      styles={styles}
    >
      {children}
    </ContainerStyled>
  )
}
