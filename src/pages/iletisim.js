import React from "react"
import Layout from "../layout/Layout"
import SEO from "../components/seo/seo"
import styled from "styled-components"
import ContactMain from "../pagesParts/contact/ContactMain"
import PageHeader from "../components/pageHeader/PageHeader"

const StyledMainWrapper = styled.main`
  margin-top: 60px;
`

export default function ContactPage() {
  return (
    <Layout>
      <SEO
        title="İletişim"
        description="Balıkesir Gönen'de hizmet eden restronımızın iletişim bilgilerine ulaşabilirsiniz."
      />
      <StyledMainWrapper>
        <PageHeader
          heading="İletişim"
          subheading="Balıkesir Gönen'de hizmet eden restronımızın iletişim bilgilerine ulaşabilirsiniz."
        />
        <ContactMain />
      </StyledMainWrapper>
    </Layout>
  )
}
