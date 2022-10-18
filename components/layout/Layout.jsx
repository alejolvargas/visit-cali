import react from 'react'
import { GlobalHeader } from './components/GlobalHeader'
import { GlobalFooter } from './components/GlobalFooter'

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalHeader />
      <main>{children}</main>
      <GlobalFooter />
    </>
  )
}
