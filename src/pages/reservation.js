import React from "react"
import Layout from "../layout/Layout"
import SEO from "../components/seo/seo"
import styled from "styled-components"
import PageHeader from "../components/pageHeader/PageHeader"
import ReservationMid from "../pagesParts/reservation/ReservationMid"
import ReservationBottom from "../pagesParts/reservation/ReservationBottom"

const StyledMainWrapper = styled.main`
  margin-top: 60px;
  background: ${props => props.theme.colors.light};
`

export default function OurMenuPage() {
  return (
   <Layout>
      <SEO
        title="Rezervasyon"
        description="Tokyay Bahçe için rezervasyon yapabilirsiniz."
      />
      <StyledMainWrapper>
        <PageHeader
          heading="Rezervasyon"
          subheading="Tokyay Bahçe rezervasyon için 0545 217 51 17 numarasını arayabilirsiniz."
        />

      </StyledMainWrapper>
    </Layout>


  )
}
