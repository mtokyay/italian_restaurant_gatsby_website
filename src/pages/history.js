import React from "react"
import Layout from "../layout/Layout"
import SEO from "../components/seo/seo"
import styled from "styled-components"

import PageHeader from "../components/pageHeader/PageHeader"
import TopPart from "../pagesParts/history/TopPart"
import MidPart from "../pagesParts/history/MidPart"
import BotPart from "../pagesParts/history/BotPart"

const StyledMainWrapper = styled.main`
  margin-top: 60px;
`

export default function HistoryPage() {
  return (
    <Layout>
      <SEO
        title="Tarihimiz"
        description="2021'de faliyete geçtiğimiz Tokyay Bahçe'de ilk günden itibaren kaliteli lezzet anlaşını bozmadan hizmet etmekteyiz."
      />
      <StyledMainWrapper>
        <PageHeader
          heading="Tarihimiz"
          subheading="2021'de faliyete geçtiğimiz Tokyay Bahçe'de ilk günden itibaren kaliteli lezzet anlaşını bozmadan hizmet etmekteyiz."
        />
        <TopPart />
        <MidPart />
        <BotPart />
      </StyledMainWrapper>
    </Layout>
  )
}
