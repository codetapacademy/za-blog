import React from 'react'
import { StyledFooter } from './footer.style'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <StyledFooter>
      &copy; {currentYear} Toamna
    </StyledFooter>
  )
}

export { Footer }
