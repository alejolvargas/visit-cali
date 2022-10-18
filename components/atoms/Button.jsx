import react from 'react'
import styled, { css } from 'styled-components'

export const Button = ({ children, mode = 'primary', size = 'm' }) => {
  return (
    <ButtonStyled mode={mode} size={size}>
      {children}
    </ButtonStyled>
  )
}

const sizes = {
  s: css`
    padding: 5px;
  `,
  m: css`
    padding: 10px;
  `,
  l: css`
    padding: 20px;
  `,
}

const modes = {
  primary: css`
    background: #dbeefe;
    color: #1d764a;
  `,
  secondary: css`
    background-color: blue;
  `,
}

const ButtonStyled = styled.button`
  cursor: pointer;
  vertical-align: middle;
  font-family: Avenir;
  font-weight: 800;
  font-size: 1.8rem;
  line-height: 2.8rem;
  border-radius: 0.8rem;
  border: none;
  text-align: center;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.8rem 3.2rem;
  outline: none;
  transition: all 0.2s ease-in-out;
  margin-left: 0;
  margin-top: 3.2rem;
  padding: 1.8rem 3.2rem;
  font-size: 1.8rem;
  line-height: 2.8rem;
  ${({ size }) => sizes[size]}
  ${({ mode }) => modes[mode]}
`
