import React from "react"
import Layout from "../layout/Layout"
import SEO from "../components/seo/seo"
import styled from "styled-components"
import PageHeader from "../components/pageHeader/PageHeader"
import AboutTop from "../pagesParts/about/AboutTop"
import AboutMid from "../pagesParts/about/AboutMid"
import AboutBot from "../pagesParts/about/AboutBot"

const StyledMainDiv = styled.main`
  margin-top: 60px;
`

export default function AboutPage() {
  return (
    <Layout>
      <SEO
        title="Hakkımızda"
        description="İnanıyoruzki yemek birlikte paylaşında güzel, bunun için unutulmaz bir deneyim yaşamanız için her detayı düşünüyoruz."
      />
      <StyledMainDiv>
        <PageHeader
          heading="Hakkımızda"
          subheading="İnanıyoruzki yemek birlikte paylaşında güzel, bunun için unutulmaz bir deneyim yaşamanız için her detayı düşünüyoruz."
        />
        <AboutTop />
        <AboutMid />
        <AboutBot />
      </StyledMainDiv>
    </Layout>
  )
}
