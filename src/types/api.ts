export type LogoProps = {
  alternativeText: string;
  url: string;
};

export type HeaderProps = {
  title: string;
  description: string;
  button: {
    label: string;
    url: string;
  };
  image: {
    alternativeText: string;
    url: string;
  };
};

export type SectionAboutProjectProps = {
  title: string;
  description: string;
  image: {
    url: string;
    alternativeText: string;
  };
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

export type LandingPageProps = {
  logo: LogoProps;
  header: HeaderProps;
  sectionAboutProject: SectionAboutProjectProps;
  sectionTech: SectionTechProps;
  sectionConcepts: SectionConceptsProps;
};
