import React from "react"
import styled from "styled-components"

const StyledParagraph = styled.p`
  color: ${props => props.theme.colors.grey};
  line-height: 1.8;
`

export default function Address() {
  return (
    <div>
      <StyledParagraph>Gündoğdu Mahallesi</StyledParagraph>
      <StyledParagraph>Manyas Caddesi No:118</StyledParagraph>
      <StyledParagraph>Gönen Balıkesir</StyledParagraph>
    </div>
  )
}
