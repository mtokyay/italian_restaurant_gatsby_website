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
        description="Balıkesir ilinin Gönen ilçesinde hizmet veren restorantımızın iletişim bilgilerine ulaşabilirsiniz."
      />
      <StyledMainWrapper>
        <PageHeader
          heading="İLETİŞİM"
          subheading="Balıkesir ilinin Gönen ilçesinde hizmet veren restorantımızın iletişim bilgilerine ulaşabilirsiniz."
        />
        <ContactMain />
      </StyledMainWrapper>
    </Layout>
  )
}
