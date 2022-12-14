export type LogoProps = Image;

export type Image = {
  url: string;
  alternativeText: string;
};

export type HeaderProps = {
  title: string;
  description: string;
  button: {
    label: string;
    url: string;
  };
  image: Image;
};

export type SectionAboutProjectProps = {
  title: string;
  description: string;
  image: Image;
};

export type SectionTechProps = {
  title: string;
  techIcons: TechIcon[];
};

export type TechIcon = {
  icon: { name: string; url: string; alternativeText: string };
  title: string;
};

export type SectionConceptsProps = {
  title: string;
  concepts: Array<{
    title: string;
  }>;
};

export type SectionModulesProps = {
  title: string;
  modules: Module[];
};

export type Module = {
  title: string;
  subtitle: string;
  description: string;
};

export type SectionAgendaProps = {
  title: string;
  description: string;
};

export type PricingBoxProps = {
  totalPrice: number;
  numberInstallments: number;
  priceInstallment: number;
  benefits: string;
  button: {
    label: string;
    url: string;
  };
};

export type SectionAboutUsProps = {
  title: string;
  authors: Author[];
};

export type Author = {
  photo: Image;
  name: string;
  role: string;
  description: string;
  socialLinks?: SocialLink[];
};

export type SocialLink = {
  title: string;
  url: string;
};

export type SectionReviewsProps = {
  title: string;
  reviews: Review[];
};

export type Review = {
  name: string;
  text: string;
  photo: Image;
};

export type SectionFaqProps = {
  title: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
};

export type LandingPageProps = {
  logo: LogoProps;
  header: HeaderProps;
  sectionAboutProject: SectionAboutProjectProps;
  sectionTech: SectionTechProps;
  sectionConcepts: SectionConceptsProps;
  sectionModules: SectionModulesProps;
  sectionAgenda: SectionAgendaProps;
  pricingBox: PricingBoxProps;
  sectionAboutUs: SectionAboutUsProps;
  sectionReviews: SectionReviewsProps;
  sectionFaq: SectionFaqProps;
};
