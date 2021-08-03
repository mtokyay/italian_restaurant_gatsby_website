import React from "react"
import Layout from "../layout/Layout"
import SEO from "../components/seo/seo"
import HeroSection from "../homeSections/HeroSection"
import AboutSection from "../homeSections/AboutSection"
import HistorySection from "../homeSections/HistorySection"
import ChefSection from "../homeSections/ChefSection"
import WineSection from "../homeSections/WineSection"
import ReservationSection from "../homeSections/ReservationSection"
import ContactSection from "../homeSections/ContactSection"

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Anasayfa"
        description="Tokyay Bahçe Balıkesir Gönen - Et, pide, kahvaltı, tatlı, kahve ve bir çok lezzetimizi denemek için sizleri bekliyoruz."
      />
      <main>
        <HeroSection />
        <AboutSection />




        <ContactSection />
      </main>
    </Layout>
  )
}
