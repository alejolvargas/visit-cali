import react from 'react'
import styled, { css } from 'styled-components'
import { Topbar } from '../Topbar/Topbar'

export const GlobalHeader = () => {
  return (
    <GlobalHeaderWrapper>
      <Topbar />
    </GlobalHeaderWrapper>
  )
}

const GlobalHeaderWrapper = styled.header`
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`
