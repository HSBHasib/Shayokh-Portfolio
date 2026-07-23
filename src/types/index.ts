export interface SocialLinks {
  researchGate: string;
  googleScholar: string;
  linkedIn: string;
  facebook: string;
}

export interface SiteAssets {
  logoLight: string;
  logoDark: string;
  profilePic: string;
  aboutImage: string;
  cv: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  institution: string;
  degree: string;
  bio: string;
  socials: SocialLinks;
}

export interface Research {
  id: string;
  title: string;
  journal: string;
  publicationDate: string;
  doi: string;
  authors: string[];
  referencesCount: number;
  figuresCount: number;
  googleScholarLink: string;
  researchGateLink: string;
  pdfUrl: string;
  abstract: string;
  keywords: string[];
  keyFindings: string[];
}

export interface PortfolioData {
  siteAssets: SiteAssets;
  personalInfo: PersonalInfo;
  skills: string[];
  researches: Research[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}
