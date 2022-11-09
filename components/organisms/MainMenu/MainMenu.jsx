import react from 'react'
import styled, { css } from 'styled-components'

export const MainMenu = () => {
  return (
    <MainMenuWrapper>
      <MainMenuGridWrapper>
        <MainMenuGrid></MainMenuGrid>
      </MainMenuGridWrapper>
    </MainMenuWrapper>
  )
}

const MainMenuWrapper = styled.div`
  z-index: 50;
  width: 100%;
  height: 100%;
  left: 0px;
  overflow-y: auto;
  position: fixed;
  display: flex;
  opacity: 0;
  top: 0px;
  transition: opacity 0.5s ease 0s;
  transform: translateX(-100%);
  animation: 0.5s ease 0s 1 normal none running animation-1pyv35r;
`

const MainMenuGridWrapper = styled.div`
  position: relative;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MainMenuGrid = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  justify-items: center;
  grid-auto-rows: auto;
  max-width: none;
  column-gap: 0;
  padding: 0 0 0 0;
  grid-template-columns: repeat(12, 1fr);
`
