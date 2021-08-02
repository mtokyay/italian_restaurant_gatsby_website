import React from "react"
import Layout from "../layout/Layout"
import SEO from "../components/seo/seo"
import styled from "styled-components"
import MenuBody from "../pagesParts/menu/MenuBody"
import PageHeader from "../components/pageHeader/PageHeader"

const StyledMainWrapper = styled.main`
  margin-top: 60px;
`

export default function OurMenuPage() {
  return (
    <Layout>
      <SEO
        title="Menü"
        description="Mutfaktan çıkan lezzetli geleneksel lezzetlere Tokyay Bahçe menüsünden ulaşabilirsiniz."/>
      <StyledMainWrapper>
        <PageHeader
          heading="Menü"
          subheading="Mutfaktan çıkan lezzetli geleneksel lezzetlere Tokyay Bahçe menüsünden ulaşabilirsiniz."
        />
        <MenuBody />
      </StyledMainWrapper>
    </Layout>
  )
}
