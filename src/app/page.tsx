import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Research from "@/components/sections/Research";
import { portfolioData } from "@/data/portfolioData";

export default function Home() {
  const { siteAssets, personalInfo, skills, researches } = portfolioData;

  return (
    <>
      <Hero
        name={personalInfo.name}
        title={personalInfo.title}
        bio={personalInfo.bio}
        cvUrl={siteAssets.cv}
        profilePic={siteAssets.profilePic}
      />

      <About
        name={personalInfo.name}
        institution={personalInfo.institution}
        degree={personalInfo.degree}
        bio={personalInfo.bio}
        profilePic={siteAssets.profilePic}
      />

      <Skills skills={skills} />

      <Research researches={researches} />
    </>
  );
}
