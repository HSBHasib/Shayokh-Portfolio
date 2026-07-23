import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Research from "@/components/sections/Research";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import FadeIn from "@/components/ui/FadeIn";
import { fetchPortfolioData } from "@/lib/api";

export default async function Home() {
  const portfolioData = await fetchPortfolioData();
  const { siteAssets, personalInfo, skills, researches } = portfolioData;

  return (
    <>
      <Navbar logoUrl={siteAssets.logo} name={personalInfo.name} />

      <Hero
        name={personalInfo.name}
        title={personalInfo.title}
        bio={personalInfo.bio}
        cvUrl={siteAssets.cv}
        profilePic={siteAssets.profilePic}
      />

      <FadeIn>
        <About
          name={personalInfo.name}
          institution={personalInfo.institution}
          degree={personalInfo.degree}
          bio={personalInfo.bio}
          aboutImage={siteAssets.aboutImage}
        />
      </FadeIn>

      <FadeIn>
        <Skills skills={skills} />
      </FadeIn>

      <FadeIn>
        <Research researches={researches} />
      </FadeIn>

      <FadeIn>
        <Education />
      </FadeIn>

      <FadeIn>
        <Contact
          email="hasibhsb19@gmail.com"
          linkedIn={personalInfo.socials.linkedIn}
        />
      </FadeIn>

      <Footer socials={personalInfo.socials} name={personalInfo.name} />

      <ScrollToTop />
    </>
  );
}
