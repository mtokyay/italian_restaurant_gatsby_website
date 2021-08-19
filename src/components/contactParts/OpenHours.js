import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  color: ${props => props.theme.colors.grey};
  line-height: 1.8;
`
const StyledList = styled.dl`
  display: flex;
  justify-content: space-between;
`
export default function OpenHours() {
  return (
    <StyledDiv>
      <StyledList>
        <dt>Pazartesi - Pazar</dt>
        <dd>09:00 - 24:00</dd>
      </StyledList>
    </StyledDiv>
  )
}
