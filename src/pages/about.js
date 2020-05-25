import React from "react"
import Layout from "../components/layout"
import SkillsSection from "../components/sections/skills"
import EducationSection from "../components/sections/education"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <EducationSection />
      <SkillsSection />
    </Layout>
  )
}

export default AboutPage
