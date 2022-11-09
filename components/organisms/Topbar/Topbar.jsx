import react from 'react'
import styled, { css } from 'styled-components'
import { MainMenu } from '../MainMenu/MainMenu'

export const Topbar = () => {
  return (
    <>
      <TopbarWrapper />
      <MainMenu />
    </>
  )
}

const TopbarWrapper = styled.div`
  overflow: visible;
  position: fixed;
  top: 0;
  z-index: 51;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`


