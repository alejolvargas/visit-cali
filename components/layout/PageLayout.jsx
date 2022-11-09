import react from 'react'
import { GlobalHeader } from '../organisms/Header/GlobalHeader'
import { GlobalFooter } from '../organisms/Footer/GlobalFooter'

export const PageLayout = ({ children }) => {
  return (
    <>
      <GlobalHeader />
      <main>{children}</main>
      <GlobalFooter />
    </>
  )
}
